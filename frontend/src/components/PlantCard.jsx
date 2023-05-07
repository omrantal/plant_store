import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';

import styles from '../style';

import { TailSpinner } from './Spinner';

import { useAuthContext } from '../hooks/useAuthContext';
import { useFunctions } from '../hooks/useFunctions';

const PlantCard = ({ plant, group}) => {
  const { user } = useAuthContext()
  const { addLoading, addPlantToCart } = useFunctions()
  const [tooltip, setTooltip] = useState(false)
 
  return (
    <div className={`w-[180px] inline-flex flex-col items-center justify-center m-[10px] border-solid border-gray-400 border-[1px] ${group ? 'duration-300 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.9] hover:!scale-100 mix-blend-luminosity' : ''}`}>
      <img src={plant.image} alt="plant" className="h-[180px] w-[180px]" />
      <p className="mt-3">{plant.name}</p>
      <div className="flex justify-between items-center mt-3">
        <p className="mr-6">{plant.price}</p>
        <button disabled={addLoading || !user} className={`relative inline-block ${user && 'hover:rounded-full hover:bg-gray-300 duration-300'} p-0.5`} onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)}>
          {addLoading ? <TailSpinner width="22px" /> : <IoMdAdd className={`h-[22px] w-[22px] shrink-0 ${user ? 'cursor-pointer' : 'cursor-default opacity-10'}`} onClick={() => addPlantToCart(plant)} />}
          {tooltip && <div className={`absolute top-[calc(-90%-10px)] translate-x-[-10%] ${styles.paragraph3} bg-black text-white p-1 rounded-[4px] z-10 text-center min-w-[100px]`}>
            {user && (addLoading ? 'Adding... ' : 'Add to Cart')}
          </div>}
        </button>
      </div>
      <Link to={`/store/${plant._id}`} className="w-full text-center mt-3 p-2 border-solid border-gray-400 border-t-[1px] hover:bg-gray-200 duration-300">
        See Options
      </Link>
    </div>
  )
}

export { PlantCard }