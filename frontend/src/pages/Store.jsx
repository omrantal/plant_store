import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import axios from 'axios';
import styles from '../style';

import Help from '../sections/Help';

const PlantCard = lazy(() => import('../components/PlantCard').then((module) => {
  return { default: module.PlantCard }
}))
import { Spinner } from '../components/Spinner';

import { usePlantsContext } from '../hooks/usePlantsContext';

const Store = () => {
  const { plants, dispatch } = usePlantsContext()

  const [activeTab, setActiveTab] = useState(1)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  const [indoorPlants, setIndoorPlants] = useState([])
  const [outdoorPlants, setOutdoorPlants] = useState([])

  useEffect(() => {
    const getPlantsFromStore = async () => {
      await axios.get('http://localhost:3000/api/store')
        .then((response) => {
          dispatch({ type: 'GET_FROM_STORE', payload: response.data })
          setLoading(false)
        }).catch((error) => {
          console.log(error)
        })
    }

    getPlantsFromStore()
  }, [dispatch])

  useEffect(() => {
    let indoor = []
    let outdoor = []
    if (plants) {
      plants.map((plant) => {
        if (plant.type === 'indoor') {
          indoor = [...indoor, plant]
        } else {
          outdoor = [...outdoor, plant]
        }
      })
    }

    setIndoorPlants(indoor)
    setOutdoorPlants(outdoor)
  }, [plants])

  const filteredPlants = useMemo(() => {
    return (activeTab === 1 ? indoorPlants : outdoorPlants).filter(plant => {
      return plant.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [plants, activeTab, query])

  return (
    <section className={`${styles.padding}`}>
      <div className="text-center">
        <h1 className={`${styles.heading} mb-6 text-center`}>Shop Now</h1>
      </div>

      <div className="w-full my-6 flex flex-col md:flex-row items-center justify-around">
        <div className="my-2 md:my-0 mx-0 md:mx-2 order-2 md:order-1">
          <button className={`${activeTab === 1 ? "bg-[#669660] text-white opacity-100" : "bg-white opacity-30"} duration-300 whitespace-nowrap rounded-full rounded-r-none py-2 px-4`} onClick={() => setActiveTab(1)}>
            Indoor Plants
          </button>
          <button className={`${activeTab === 2 ? "bg-[#669660] text-white opacity-100" : "bg-white opacity-30"} duration-300 whitespace-nowrap rounded-full rounded-l-none py-2 px-4`} onClick={() => setActiveTab(2)}>
            Outdoor Plants
          </button>
        </div>
        <div className="flex flex-row my-2 md:my-0 mx-0 md:mx-2 order-1 md:order-2">
          <label htmlFor="search" className="rounded-full rounded-r-none py-2 px-4 border-solid border-gray-400 border-[1px] border-r-0">
            <AiOutlineSearch className="w-6 h-6 text-gray-800 shrink-0" />
          </label>
          <input id="search" type="search" value={query} className="rounded-full rounded-l-none py-2 px-4 border-solid border-gray-400 border-[1px] focus:outline-none" placeholder="Search ..." onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>

      {loading ? (
        <Spinner height="300px" />
      ) : (
        filteredPlants.length > 0 ?
          <div className="grid grid-cols-1 xxs:grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 place-items-center content-center group">
            {filteredPlants.map((plant) => (
              <Suspense key={plant._id} fallback={<Spinner height="300px" />}>
                <PlantCard plant={plant} group={true} />
              </Suspense>
            ))}
          </div> :
          <div className="flex justify-center items-center w-full h-[343px]">
            <h1 className={styles.heading}>Nothing to Show</h1>
          </div>
      )}
      <Help />
    </section>
  )
}

export default Store