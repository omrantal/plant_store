import { useAuthContext } from './useAuthContext';
import { usePlantsContext } from './usePlantsContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchCart } = usePlantsContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type:'LOGOUT' })

    // empty cart
    dispatchCart({ type:'EMPTY_CART' })
  }

  return { logout }
}