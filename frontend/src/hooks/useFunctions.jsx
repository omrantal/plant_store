import { useState } from "react";

import axios from "axios";

import { useAuthContext } from './useAuthContext';
import { usePlantsContext } from '../hooks/usePlantsContext';

export const useFunctions = () => {
  const { user } = useAuthContext()
  const { plantsInCart, dispatch } = usePlantsContext()

  const [addLoading, setAddLoading] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)

  const addPlantToCart = async (plant) => {
    if (!addLoading) {
      if (!user) {
        return
      }
      setAddLoading(true)    
      const choosenPlant = plantsInCart.find((plantInCart) => plantInCart.name === plant.name)

      if (choosenPlant) {
        const { _id, numOfPieces, price, priceForPiece } = choosenPlant
        await updatePlantInCart({ id: _id, numOfPieces, price, priceForPiece, change: 'add' })
      } else {
        const { name, image, type, price } = plant
        const newPlant = { name, image, type, price, numOfPieces: 1, priceForPiece: price }
        await axios.post('/api/cart', newPlant, { headers: { Authorization: `Bearer ${user.token}` } })
          .then((response) => {
            dispatch({ type: 'ADD_TO_CART', payload: response.data })
          }).catch((error) => {
            console.error(error)
          })
      }

      setAddLoading(false)
    }
  }

  const updatePlantInCart = async ({ id, numOfPieces, price, priceForPiece, change }) => {
    if (!updateLoading) {
      setUpdateLoading(true)
      let newNumOfPieces
      let newPrice
      if (change === 'add') {
        newNumOfPieces = numOfPieces + 1
        newPrice = price + priceForPiece
      } else {
        if (numOfPieces === 1) {
          setUpdateLoading(false)
          return
        }
        newNumOfPieces = numOfPieces - 1
        newPrice = price - priceForPiece
      }

      await axios.put(`/api/cart/${id}`, { numOfPieces: newNumOfPieces, price: newPrice }, { headers: { Authorization: `Bearer ${user.token}` } })
        .then((response) => {
          dispatch({ type: 'UPDATE_IN_CART', payload: { id, numOfPieces: newNumOfPieces, price: newPrice, change } })
        }).catch((error) => {
          console.log(error)
        })

      setUpdateLoading(false)
    }
  }

  return { addLoading, updateLoading, addPlantToCart, updatePlantInCart }
}

