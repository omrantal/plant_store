import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GiPlantWatering } from 'react-icons/gi';
import { BsSun } from 'react-icons/bs';

import axios from 'axios';
import styles from '../style';

import { AccordionItem } from '../components/AccordionItem';
import { Spinner, TailSpinner } from '../components/Spinner';

import { useAuthContext } from '../hooks/useAuthContext';
import { useCartFunctions } from '../hooks/useCartFunctions';

const Plant = () => {
  const { user } = useAuthContext()
  const { addLoading, addPlantToCart } = useCartFunctions()
  const [loading, setLoading] = useState(true)
  const [toggleLikes, setToggleLikes] = useState(false)
  const [toggleAbout, setToggleAbout] = useState(false)
  const { id } = useParams()
  const [choosenPlant, setChoosenPlant] = useState({})
  const { image, name, price, title, desc, watering, light, about } = choosenPlant

  useEffect(() => {
    const getSinglePlant = async () => {
      await axios.get(`/api/store/${id}`)
        .then((response) => {
          setChoosenPlant(response.data)
          setLoading(false)
        }).catch((error) => {
          console.log(error)
        })
    }

    getSinglePlant()
  }, [])

  const openLikes = () => {
    if (toggleAbout && !toggleLikes) {
      setToggleAbout(false)
    }
    setToggleLikes(!toggleLikes)
  }

  const openAbout = () => {
    if (toggleLikes && !toggleAbout) {
      setToggleLikes(false)
    }
    setToggleAbout(!toggleAbout)
  }

  return (
    <section className={`flex flex-col sm:flex-row justify-start items-start ${styles.padding}`}>
      {loading ? (
        <Spinner height="300px" />
      ) : (
        <>
          <div className="flex-1 flex justify-center mx-10 sm:mx-6 mt-10 sm:mt-4 border-solid border-gray-400 border-[1px]">
            <img src={image} alt="plant" className="h-full w-full max-w-[636px] max-h-[636px]" />
          </div>
          <div className="flex-1 flex flex-col justify-start mt-0 sm:mt-4 p-10 sm:p-0 sm:px-10">
            <h1 className={`${styles.heading}`}>{name}</h1>
            <h2 className={`${styles.paragraph2} text-gray-400`}>{price}</h2>
            <h3 className="mt-6 leading-8">
              <p className={`${styles.paragraph2} font-semibold`}>{title}</p>
              <p className={`${styles.paragraph3} font-light`}>{desc}</p>
            </h3>
            <button disabled={addLoading || !user} className={`flex my-3 md:my-6 w-full h-fit px-6 py-3 justify-center text-white ${user ? (addLoading ? 'cursor-wait' : 'cursor-pointer') : 'cursor-default'} bg-[#669660] ${user && 'hover:bg-[#99B896] hover:scale-110 duration-300'} ${styles.paragraph2}`} onClick={() => addPlantToCart(choosenPlant)}>
              {addLoading && <div className="flex mr-2 justify-center items-center"><TailSpinner width="18px" color="white" /></div>}
              {user ? (addLoading ? 'Adding...' : 'Add to Cart') : ('login to use cart')}
            </button>
            <div className="p-2">
              <AccordionItem header={`${name} likes...`} content={
                <div>
                  <div className="flex mb-3">
                    <div className="mr-3">
                      <GiPlantWatering className="w-6 h-6 shrink-0" />
                    </div>
                    <div className="flex flex-col">
                      <p className={`${styles.paragraph2} font-bold mb-2`}>Watering</p>
                      <p className={`${styles.paragraph3} font-light`}>{watering}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3">
                      <BsSun className="w-6 h-6 shrink-0" />
                    </div>
                    <div className="flex flex-col">
                      <p className={`${styles.paragraph2} font-bold mb-2`}>Light</p>
                      <p className={`${styles.paragraph3} font-light`}>{light}</p>
                    </div>
                  </div>
                </div>
              } open={toggleLikes} toggle={openLikes} />
            </div>
            <div className="p-2">
              <AccordionItem header={`About ${name} plants`} content={
                <p className={`${styles.paragraph3} font-light leading-6`}>{about}</p>
              } open={toggleAbout} toggle={openAbout} />
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Plant
