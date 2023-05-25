import { useState } from "react";

import axios from "axios";

import { useAuthContext } from './useAuthContext';
import { usePlantsContext } from './usePlantsContext';

const useCartFunctions = () => {
  const { user } = useAuthContext()
  const { plantsInCart, dispatch } = usePlantsContext()

  const [addLoading, setAddLoading] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)

  const addPlantToCart = async ({ _id, name }) => {
    if (!user) return
    
    if (!addLoading) {
      setAddLoading(true)

      const choosenPlant = plantsInCart.find((plantInCart) => plantInCart.name === name)
      if (choosenPlant) {
        await updatePlantInCart({ id: _id, change: 'add' })
      } else {
        let id = _id
        await axios.post(`/api/cart/${id}`, {}, { headers: { Authorization: `Bearer ${user.token}` } })
          .then((response) => {
            dispatch({ type: 'ADD_TO_CART', payload: response.data })
          }).catch((error) => {
            console.log(error)
          })
      }

      setAddLoading(false)
    }
  }

  const updatePlantInCart = async ({ id, change }) => {
    if (!updateLoading) {
      setUpdateLoading(true)

      await axios.put(`/api/cart/${id}`, { change }, { headers: { Authorization: `Bearer ${user.token}` } })
        .then((response) => {
          if (response.data === null) {
            setUpdateLoading(false)
            return
          }
          dispatch({ type: 'UPDATE_IN_CART', payload: { ...response.data, change } })
        }).catch((error) => {
          console.log(error)
        })

      setUpdateLoading(false)
    }
  }

  return { addLoading, updateLoading, addPlantToCart, updatePlantInCart }
}

export { useCartFunctions }
