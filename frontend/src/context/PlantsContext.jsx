import { createContext, useReducer, useEffect } from 'react';

import axios from 'axios';

import { useAuthContext } from '../hooks/useAuthContext';

export const PlantsContext = createContext()

export const plantsReducer = (state, action) => {
  let newTotalPrice = 0
  let newPlants = []

  switch (action.type) {
    // action.payload = plants array
    case 'GET_FROM_STORE':
      if (action.payload.length === 0) {
        return {
          ...state,
          plants: [],
        }
      } else {
        return {
          ...state,
          plants: action.payload
        }
      }
    // action.payload = plant object
    case 'ADD_TO_STORE':
      return {
        ...state,
        plants: [...state.plants, action.payload]
      }
    // action.payload = plant (id, updated fields)
    case 'UPDATE_IN_STORE':
      newPlants = state.plants.map((plant) => {
        if (plant._id === action.payload._id) {
          return action.payload
        }
        return plant
      })

      return {
        ...state,
        plants: newPlants
      }
    // action.payload = plant id
    case 'DELETE_FROM_STORE':
      return {
        ...state,
        plants: state.plants.filter((plant) => plant._id !== action.payload._id)
      }
    // action.payload = plants array
    case 'GET_FROM_CART': 
      if (action.payload.length === 0) {
        return {
          ...state,
          plantsInCart: [],
          totalPrice: 0
        }
      } else {
        return {
          ...state,
          plantsInCart: action.payload,
          totalPrice: action.payload.reduce((prev, cur) => {
            return prev + cur.price
          }, 0)
        }
      }
    // action.payload = plant object
    case 'ADD_TO_CART':
      return {
        ...state,
        isPlantAdded: true,
        plantsInCart: [...state.plantsInCart, action.payload],
        totalPrice: state.totalPrice + action.payload.price
      }
    // action.payload = plant id
    case 'UPDATE_IN_CART':
      const { id, numOfPieces, price, change } = action.payload
      newTotalPrice = state.totalPrice
      newPlants = state.plantsInCart.map((plant) => {
        if (plant._id === id) {
          newTotalPrice = change === 'add' ? (newTotalPrice + plant.priceForPiece) : (newTotalPrice - plant.priceForPiece)
          return {...plant, numOfPieces, price}
        }
        return plant
      })
      return {
        ...state,
        plantsInCart: newPlants,
        totalPrice: newTotalPrice
      }
    // action.payload = plant (id, price)
    case 'DELETE_FROM_CART':
      return {
        ...state,
        plantsInCart: state.plantsInCart.filter(plant => plant._id !== action.payload.id),
        totalPrice: (state.totalPrice - action.payload.price) > 0 ? state.totalPrice - action.payload.price : 0
      }
    case 'OPEN_CART':
      return {
        ...state,
        isPlantAdded: false
      }
    case 'EMPTY_CART':
      return {
        ...state,
        isPlantAdded: false,
        plantsInCart: [],
        totalPrice: 0
      }
    default:
      return state
  }
}

export const PlantsContextProvider = ({ children }) => {
  const { user } = useAuthContext()
  //const location = useLocation()
  const [state, dispatch] = useReducer(plantsReducer, {
    plants: [],
    plantsInCart: [],
    totalPrice: 0,
    isPlantAdded: false
  })

  useEffect(() => {
    const getPlantsFromCart = async () => {
      await axios.get('/api/cart', { headers: { Authorization: `Bearer ${user.token}` } })
        .then((response) => {
          dispatch({ type: 'GET_FROM_CART', payload: response.data })
        }).catch((error) => {
          console.log(error)
        })
    }

    //const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      getPlantsFromCart()
    }
  }, [user])

  return (
    <PlantsContext.Provider value={{...state, dispatch}}>
      { children }
    </PlantsContext.Provider>
  )
}