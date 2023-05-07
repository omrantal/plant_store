import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload,
        isAdmin: action.payload.role === 'ADMIN' ? true : false
      }
    case 'LOGOUT':
      return {
        user: null,
        isAdmin: false,
        users: []
      }
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    users: [],
    user: null,
    isAdmin: false
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type:'LOGIN', payload: user })
    }
  }, [])

  //console.log('AuthContext state: ', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )
}
