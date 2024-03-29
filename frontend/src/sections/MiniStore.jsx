import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import axios from 'axios';
import styles from '../style';

const PlantCard = lazy(() => import('../components/PlantCard').then((module) => {
  return { default: module.PlantCard }
}))
import { Button } from '../components/Button';
import { Spinner } from '../components/Spinner';

import { usePlantsContext } from '../hooks/usePlantsContext';

const MiniStore = () => {
  const { isPlantAdded, dispatch } = usePlantsContext()
  const scrollableElement = useRef()
  const [loading, setLoading] = useState(true)
  const [reachedEnd, setReachedEnd] = useState(false)
  const [reachedStart, setReachedStart] = useState(true)
  const [choosenPlants, setChoosenPlants] = useState([])

  useEffect(() => {
    const getPlantsFromStore = async () => {
      await axios.get('/api/store')
      //await axios.get('http://localhost:3000/api/store')
        .then((response) => {
          dispatch({ type: 'GET_FROM_STORE', payload: response.data })
          let choosen = []
          while (choosen.length < 8) {
            const randomIndex = Math.floor(Math.random() * response.data.length);
            const randomObject = response.data[randomIndex];
            if (!choosen.includes(randomObject)) {
              choosen = [...choosen, randomObject]
            }
          }

          setChoosenPlants(choosen)
          setLoading(false)
          handleScroll()
        }).catch((error) => {
          console.log(error)
        })
    }

    getPlantsFromStore()
  }, [])



  const handleScroll = () => {
    if (scrollableElement.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableElement.current;
      if (clientWidth === scrollWidth) {
        setReachedStart(true)
        setReachedEnd(true)
      } else {
        const atEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;
        const atStart = Math.ceil(scrollLeft) === 0;

        setReachedEnd(atEnd)
        setReachedStart(atStart)
      }
    }
  }

  useEffect(() => {
    handleScroll()

    scrollableElement.current.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll)
    return () => {
      if (scrollableElement.current) {
        scrollableElement.current.removeEventListener('scroll', handleScroll)
      }
      window.removeEventListener('resize', handleScroll)
    }
  }, [scrollableElement])

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 200
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 200
  }

  return (
    <section id="Store" className={`flex flex-col sm:flex-row justify-center items-center ${styles.padding}`}>
      <div className="flex-[30%] flex flex-col justify-center m-6 sm:m-9">
        <div className="flex items-center justify-between">
          <h1 className={`${styles.heading} mb-2`}>Shop Now</h1>
          <Link className={`relative flex items-center ml-6 mr-3 my-1 cursor-pointer text-black hover:text-[#669660] duration-300`} to="/cart">
            <BiCart className={`h-8 w-8`} />
            {isPlantAdded !== 0 &&
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-semibold text-black bg-red-400 rounded-full -top-2 -right-3">{isPlantAdded}</div>
            }
          </Link>
        </div>
        <p className={`${styles.paragraph3}`}>We’ve made it easy for you to bring your home to life with plants</p>
        <Button to="/store" content="Shop Now" />
      </div>
      <div className="flex-[70%] w-full sm:w-[70%]">
        <div className="relative flex items-center group">
          <div className={`${reachedStart ? 'opacity-0 cursor-default' : 'opacity-0 group-hover:opacity-100 duration-500 cursor-pointer'} absolute top-[80%] -translate-x-0 translate-y-[-50%] left-5 p-2 z-10 bg-[#669660] hover:bg-[#99B896] duration-300 text-white`} onClick={slideLeft}>
            <BsChevronCompactLeft size={20} />
          </div>
          <div id="slider" ref={scrollableElement} className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mx-6">
            {loading ? (
              <Spinner height="200px" />
            ) : (
              choosenPlants && choosenPlants.map((plant) => (
                <Suspense key={plant._id} fallback={<Spinner height="300px" />}>
                  <PlantCard plant={plant} group={false} />
                </Suspense>
              )
              ))}
          </div>
          <div className={`${reachedEnd ? 'opacity-0 cursor-default' : 'opacity-0 group-hover:opacity-100 duration-500 cursor-pointer'} absolute top-[80%] -translate-x-0 translate-y-[-50%] right-5 p-2 z-10 bg-[#669660] hover:bg-[#99B896] duration-300 text-white`} onClick={slideRight}>
            <BsChevronCompactRight size={20} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiniStore
