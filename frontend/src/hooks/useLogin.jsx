import { useState } from "react";

import axios from "axios";

import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await axios.post('/api/user/login', { email, password })

      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(response.data))
  
      // update the auth context
      dispatch({ type:'LOGIN', payload: response.data })

      // update loading state
      setIsLoading(false)
    } catch (error) {
      console.log(error.response)
      if (error.response && error.response.data) {
        setIsLoading(false)
        setError(error.response.data.error)
      }
    }
  }

  return { login, isLoading, error }
}