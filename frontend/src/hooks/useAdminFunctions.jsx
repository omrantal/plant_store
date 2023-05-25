import { useState } from 'react';

import axios from 'axios';

import { useAuthContext } from './useAuthContext';
import { usePlantsContext } from '../hooks/usePlantsContext';

const useAdminFunctions = () => {
  const { user, dispatch: dispatchUsers } = useAuthContext()
  const { dispatch } = usePlantsContext()

  const [plantsLoading, setPlantsLoading] = useState(true)
  const [usersLoading, setUsersLoading] = useState(true)

  const [modal, setModal] = useState(false)

  const getPlantsFromStore = async () => {
    await axios.get('http://localhost:3000/api/store')
      .then((response) => {
        dispatch({ type: 'GET_FROM_STORE', payload: response.data })
      }).catch((error) => {
        console.log(error)
      })

    setPlantsLoading(false)
  }

  const getUsers = async (token) => {
    await axios.get('http://localhost:3000/api/user', { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        dispatchUsers({ type: 'GET_USERS', payload: response.data })
      }).catch((error) => {
        console.log(error)
      })

    setUsersLoading(false)
  }

  const addPlant = async ({ image, name, price, type, title, desc, watering, light, about }) => {
    setModal(false)
    setPlantsLoading(true)

    const newPlant = { image, name, price, type, title, desc, watering, light, about }
    await axios.post('http://localhost:3000/api/store', newPlant, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        dispatch({ type: 'ADD_TO_STORE', payload: response.data })
        import ('../components/Toast').then((module) => {
          module.notifySuccess("Plant got added successfully")
        })
      }).catch((error) => {
        import ('../components/Toast').then((module) => {
          module.notifyError(error.response.data.error)
        })
      })

    setPlantsLoading(false)
  }

  const editPlant = async ({ id, image, name, price, type, title, desc, watering, light, about }) => {
    setModal(false)
    setPlantsLoading(true)

    const updatedPlant = { image, name, price, type, title, desc, watering, light, about }
    await axios.put(`http://localhost:3000/api/store/${id}`, updatedPlant, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        dispatch({ type: 'UPDATE_IN_STORE', payload: { _id: id, ...updatedPlant } })
        import ('../components/Toast').then((module) => {
          module.notifySuccess("Plant got updated successfully")
        })
      }).catch((error) => {
        import ('../components/Toast').then((module) => {
          module.notifyError(error.response.data.error)
        })
      })

    setPlantsLoading(false)
  }

  const removePlant = async (_id) => {
    setPlantsLoading(true)

    await axios.delete(`http://localhost:3000/api/store/${_id}`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        dispatch({ type: 'DELETE_FROM_STORE', payload: { _id } })
        import ('../components/Toast').then((module) => {
          module.notifySuccess("Plant got removed successfully")
        })
      }).catch((error) => {
        import ('../components/Toast').then((module) => {
          module.notifyError(error.response.data.error)
        })
      })

    setPlantsLoading(false)
  }

  const removeUser = async (_id) => {
    setUsersLoading(true)

    await axios.delete(`http://localhost:3000/api/user/${_id}`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then((response) => {
        dispatchUsers({ type: 'DELETE_USER', payload: { _id } })
        import ('../components/Toast').then((module) => {
          module.notifySuccess("User got removed successfully")
        })
      }).catch((error) => {
        import ('../components/Toast').then((module) => {
          module.notifyError(error.response.data.error)
        })
      })

    setUsersLoading(false)
  }

  return { plantsLoading, usersLoading, modal, setModal, getPlantsFromStore, getUsers, addPlant, editPlant, removePlant, removeUser }
}

export { useAdminFunctions }
