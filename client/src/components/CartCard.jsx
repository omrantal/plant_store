import React, { useState } from 'react';
import { AiOutlineDownCircle, AiOutlineUpCircle } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi';

import styles from '../style';

import { TailSpinner } from '../components/Spinner';

import { useCartFunctions } from '../hooks/useCartFunctions';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePlantsContext } from '../hooks/usePlantsContext';

const CartCard = ({ plant }) => {
  const { dispatch } = usePlantsContext()
  const { user } = useAuthContext()
  const { updateLoading, updatePlantInCart } = useCartFunctions()

  const [loading, setLoading] = useState(false)

  const { _id, numOfPieces } = plant

  const deletePlantFromCart = async ({ id, name, price }) => {
    setLoading(true)

    const cartPlants = JSON.parse(localStorage.getItem(`${user.email}_cart`)) || []
    const index = cartPlants.findIndex((plantInCart) => plantInCart.name === name)
    if (index !== -1) {
      cartPlants.splice(index, 1)
    }

    dispatch({ type: 'DELETE_FROM_CART', payload: { id, price } })

    if (cartPlants.length === 0) {
      localStorage.removeItem(`${user.email}_cart`) 
    } else {
      localStorage.setItem(`${user.email}_cart`, JSON.stringify(cartPlants))
    }

    setLoading(false)
  }

  if (loading) {
    return (
      <div className="w-[250px] sm:w-[260px] md:w-[270px] lg:w-[280px] min-h-[122px] flex my-2 justify-center items-center">
        <TailSpinner width="40px" />
      </div>
    )
  }

  return (
    <div className="w-[250px] sm:w-[260px] md:w-[270px] lg:w-[280px] flex my-2 border-solid border-gray-400 border-[1px]">
      <img src={plant.image} alt="plant" className="h-[120px] w-[120px]" />
      <div className="flex-1 flex flex-col items-center justify-start">
        <h5 className={`${styles.paragraph2} my-3 text-center`}>{plant.name}</h5>
        <div className="flex mt-3 justify-center items-center">
          <p className={`${styles.paragraph2} mr-3`}>{plant.price}</p>
          <div className="hover:bg-gray-300 duration-300 ml-3 hover:rounded-full p-1">
            <BiTrash className="h-[24px] w-[24px] shrink-0 cursor-pointer" onClick={() => deletePlantFromCart({ id: _id, name: plant.name, price: plant.price })} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mr-2">
        <button disabled={updateLoading} className="hover:rounded-full hover:bg-gray-300 duration-300 p-0.5 mb-3">
          {updateLoading ? <TailSpinner width="20px" /> : <AiOutlineUpCircle className="h-[20px] w-[20px] shrink-0 cursor-pointer" onClick={() => updatePlantInCart({ id: _id, change: 'add' })} />}
        </button>
        <p className={`${styles.paragraph3}`}>{plant.numOfPieces}</p>
        <button disabled={updateLoading || numOfPieces === 1} className="hover:rounded-full hover:bg-gray-300 duration-300 p-0.5 mt-3">
          {updateLoading ? <TailSpinner width="20px" /> : <AiOutlineDownCircle className="h-[20px] w-[20px] shrink-0 cursor-pointer" onClick={() => updatePlantInCart({ id: _id, change: 'remove' })} />}
        </button>
      </div>
    </div>
  )
}

export { CartCard }
