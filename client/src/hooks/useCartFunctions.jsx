import { useState } from "react";

import { useAuthContext } from './useAuthContext';
import { usePlantsContext } from './usePlantsContext';

const useCartFunctions = () => {
  const { user } = useAuthContext()
  const { dispatch } = usePlantsContext()

  const [addLoading, setAddLoading] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)

  const addPlantToCart = async ({ _id, name, image, type, price }) => {
    if (!user) return
    
    if (!addLoading) {
      setAddLoading(true)

      const cartPlants = JSON.parse(localStorage.getItem(`${user.email}_cart`)) || []
      const choosenPlant = cartPlants.find((plantInCart) => plantInCart.name === name)

      if (choosenPlant) {
        await updatePlantInCart({ id: _id, change: 'add' })
      } else {
        const newCart = [...cartPlants, { _id, name, image, type, price, numOfPieces: 1, priceForPiece: price }]
        localStorage.setItem(`${user.email}_cart`, JSON.stringify(newCart))

        dispatch({ type: 'ADD_TO_CART', payload: { _id, name, image, type, price, numOfPieces: 1, priceForPiece: price } })
      }

      setAddLoading(false)
    }
  }

  const updatePlantInCart = async ({ id, change }) => {
    if (!updateLoading) {
      setUpdateLoading(true)

      const cartPlants = JSON.parse(localStorage.getItem(`${user.email}_cart`))
      
      const updatedCart = cartPlants.map((plantInCart) => {
        if (plantInCart._id === id) {
          let newNumOfPieces
          let newPrice
          const { numOfPieces, price, priceForPiece } = plantInCart
          if (change === 'add') {
            newNumOfPieces = numOfPieces + 1
            newPrice = price + priceForPiece
          } else {
            if (numOfPieces === 1) return null
            newNumOfPieces = numOfPieces - 1
            newPrice = price - priceForPiece
          }
          dispatch({ type: 'UPDATE_IN_CART', payload: { ...plantInCart, change } })
          return { ...plantInCart, numOfPieces: newNumOfPieces, price: newPrice }
        }
        return plantInCart
      })

      localStorage.setItem(`${user.email}_cart`, JSON.stringify(updatedCart))

      setUpdateLoading(false)
    }
  }

  return { addLoading, updateLoading, addPlantToCart, updatePlantInCart }
}

export { useCartFunctions }
