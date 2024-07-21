import { useContext } from 'react';

import { PlantsContext } from '../context/PlantsContext';

export const usePlantsContext = () => {
  const context = useContext(PlantsContext)
  
  if (!context) {
    throw Error('usePlantsContext must be used inside an PlantsContextProvider')
  }

  return context
}
