import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { BiTrash, BiEdit, BiAddToQueue } from 'react-icons/bi';

import styles from '../style';

import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from '../components/Spinner';
import { ToastContainer } from 'react-toastify';

import { useAuthContext } from '../hooks/useAuthContext';
import { usePlantsContext } from '../hooks/usePlantsContext';
import { useAdminFunctions } from '../hooks/useAdminFunctions';

const Admin = () => {
  const { user, users } = useAuthContext()
  const { plants } = usePlantsContext()
  const { plantsLoading, usersLoading, modal, setModal, getPlantsFromStore, getUsers, addPlant, editPlant, removePlant, removeUser } = useAdminFunctions()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState(1)
  const [query, setQuery] = useState('')
  const [checkLoading, setCheckLoading] = useState(true)

  const [id, setId] = useState('')
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('indoor')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [watering, setWatering] = useState('')
  const [light, setLight] = useState('')
  const [about, setAbout] = useState('')
  const [modalType, setModalType] = useState('')

  useEffect(() => {
    const checkUser = async () => {
      const { role, token } = await JSON.parse(localStorage.getItem('user'))
      if (role !== 'ADMIN') {
        navigate('/')
      } else {
        setCheckLoading(false)
        await getPlantsFromStore()
        await getUsers(token)
      }
    }

    checkUser()
  }, [user])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModal(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const filteredItems = useMemo(() => {
    return (activeTab === 1 ? plants : users).filter(item => {
      return (activeTab === 1 ? item.name : item.username).toLowerCase().includes(query.toLowerCase())
    })
  }, [plants, users, activeTab, query])

  const setEmpty = () => {
    setId('')
    setName('')
    setImage('')
    setPrice('')
    setType('indoor')
    setTitle('')
    setDesc('')
    setWatering('')
    setLight('')
    setAbout('')
  }

  const choosePlant = (plant) => {
    setId(plant._id)
    setName(plant.name)
    setImage(plant.image)
    setPrice(plant.price)
    setType(plant.type)
    setTitle(plant.title)
    setDesc(plant.desc)
    setWatering(plant.watering)
    setLight(plant.light)
    setAbout(plant.about)
    setModalType('Edit')
    setModal(true)
  }

  if (checkLoading) {
    return (
      <Spinner height="300px" />
    )
  }

  return (
    <section className={`${styles.padding}`}>
      <h1 className={`${styles.heading} mb-6 text-center`}>Admin Panel</h1>

      <div className="w-full my-6 flex flex-col sm:flex-row items-center justify-around">
        <div className="my-2 sm:my-0 mx-0 sm:mx-6 order-2 sm:order-1">
          <button className={`${activeTab === 1 ? "bg-[#669660] text-white opacity-100" : "bg-white opacity-30"} duration-300 whitespace-nowrap rounded-full rounded-r-none py-2 px-4`} onClick={() => setActiveTab(1)}>
            Plants
          </button>
          <button className={`${activeTab === 2 ? "bg-[#669660] text-white opacity-100" : "bg-white opacity-30"} duration-300 whitespace-nowrap rounded-full rounded-l-none py-2 px-4`} onClick={() => setActiveTab(2)}>
            Users
          </button>
        </div>
        <div className="flex flex-row my-2 sm:my-0 mx-0 sm:mx-6 order-1 sm:order-2">
          <label htmlFor="search" className="rounded-full rounded-r-none py-2 px-4 border-solid border-gray-400 border-[1px] border-r-0">
            <AiOutlineSearch className="w-6 h-6 text-gray-800 shrink-0" />
          </label>
          <input id="search" type="search" className="rounded-full rounded-l-none py-2 px-4 border-solid border-gray-400 border-[1px] focus:outline-none" placeholder="Search ..." onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>

      {activeTab === 1 ? (
        <div>
          <div className={`fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-70 ${modal ? 'block' : 'hidden'}`}>
            <div className="flex flex-col items-start my-2 mx-auto p-4 bg-gradient-to-t from-[#669660] to-[#99B896] text-black w-[60%]">
              <div className={`flex flex-col w-full ${styles.paragraph3}`}>
                <h1 className={`${styles.paragraph1} my-3 text-center`}>Add New Plant</h1>
                <div>
                  <label htmlFor="image">Enter Image Link:</label>
                  <input id="image" className="my-2 px-2 w-full h-[30px]" value={image} onChange={e => setImage(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="name">Enter Name:</label>
                  <input id="name" className="my-2 px-2 w-full h-[30px]" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="price">Enter Price:</label>
                  <input id="price" className="my-2 px-2 w-full h-[30px]" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="type">Select Type:</label>
                  <select id="type" className="bg-white my-2 px-2 w-full h-[30px]" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="title">Enter Title:</label>
                  <input id="title" className="my-2 px-2 w-full h-[30px]" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="desc">Enter Description:</label>
                  <input id="desc" className="my-2 px-2 w-full h-[30px]" value={desc} onChange={e => setDesc(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="watering">Enter Watering Conditions:</label>
                  <input id="watering" className="my-2 px-2 w-full h-[30px]" value={watering} onChange={e => setWatering(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="light">Enter Light Conditions:</label>
                  <input id="light" className="my-2 px-2 w-full h-[30px]" value={light} onChange={e => setLight(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="about">
                    Enter About Section:
                  </label> <br />
                  <textarea id="about" className="my-2 p-2 w-full min-w-full max-w-full min-h-[60px]" value={about} onChange={e => setAbout(e.target.value)} />
                </div>
              </div>

              <div className={`flex justify-between mt-6 w-full ${styles.paragraph2}`}>
                {modalType === 'Add' ?
                  <button className="mx-1 py-2 px-4 text-white cursor-pointer hover:bg-[#99B896] hover:scale-110 duration-300"
                    disabled={(name && title) === '' ? true : false}
                    onClick={() => {
                      addPlant({ image, name, price, type, title, desc, watering, light, about })
                      setEmpty()
                    }}
                  >
                    Add
                  </button>
                  :
                  <button className="mx-1 py-2 px-4 text-white cursor-pointer hover:bg-[#99B896] hover:scale-110 duration-300" 
                    disabled={(name && title) === '' ? true : false}
                    onClick={() => {
                      editPlant({ id, image, name, price, type, title, desc, watering, light, about })
                      setEmpty()
                    }}
                  >
                    Edit
                  </button>
                }
                <button className="mx-1 py-2 px-4 text-white cursor-pointer hover:bg-[#99B896] hover:scale-110 duration-300" onClick={() => {
                  setModal(false)
                  setEmpty()
                }}>Close</button>
              </div>
            </div>
          </div>

          <div className="list-none">
            {plantsLoading ? (
              <Spinner height="300px" />
            ) : (
              filteredItems.length > 0 ? (
                <>
                  <div className="flex justify-center items-center w-fit mx-auto my-3 sm:my-6 px-6 py-3 text-center text-white cursor-pointer bg-[#669660] hover:bg-[#99B896] hover:scale-110 duration-500"
                    onClick={() => {
                      setEmpty()
                      setModalType('Add')
                      setModal(true)
                    }}
                  >
                    <BiAddToQueue className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    <p className={`${styles.paragraph1} ml-2`}>Add Plant</p>
                  </div>
                  {filteredItems.map((plant) => (
                    <li className="flex flex-col items-center justify-center mx-auto w-[80%] border-gray-300 border-solid border-[1px] p-4 mb-2" key={plant._id}>
                      <div className="flex justify-start items-start w-full">
                        <img src={plant.image} alt="plant" className="h-[120px] w-[120px]" />
                        <div className='px-1 sm:px-3 py-3 ml-4'>
                          <p className={`${styles.paragraph2} font-bold mb-2`}>{plant.name}</p>
                          <p className={`${styles.paragraph3} font-semibold`}>{plant.title}</p>
                          <p className={`${styles.paragraph3}`}>{plant.desc}</p>
                          <p className={`${styles.paragraph3} font-semibold`}>{plant.price}.00</p>
                        </div>
                      </div>
                      <div className="flex justify-between w-full">
                        <p className={`${styles.paragraph2} my-2 ml-3`}>{plant.type} plant</p>
                        <div className="flex justify-end items-end m-2">
                          <div className="hover:bg-gray-300 duration-300 ml-3 hover:rounded-full">
                            <BiEdit className="m-0.5 sm:m-1 cursor-pointer h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" onClick={() => choosePlant(plant)} />
                          </div>
                          <div className="hover:bg-gray-300 duration-300 ml-3 hover:rounded-full">
                            <BiTrash className="m-0.5 sm:m-1 cursor-pointer h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" onClick={() => removePlant(plant._id)} />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              ) : (
                <div className="flex justify-center items-center w-full h-[343px]">
                  <h1 className={styles.heading}>Nothing to Show</h1>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="list-none">
          {usersLoading ? (
            <Spinner />
          ) : (
            filteredItems.length > 0 ? (
              filteredItems.map((u) => (
                <li className="flex flex-col items-center justify-center mx-auto w-[80%] border-gray-300 border-solid border-[1px] p-4 mb-2" key={u._id}>
                  <div className="flex justify-start items-start w-full">
                    <AiOutlineUser className="h-[100px] w-[100px]" />
                    <div className='px-1 sm:px-3 py-3 ml-4'>
                      <p className={`${styles.paragraph2} font-bold mb-2`}>{u.username}</p>
                      <p className={`${styles.paragraph2} font-semibold`}>{u.email}</p>
                    </div>
                  </div>
                  <div className="flex justify-end w-full">
                    <div className="hover:bg-gray-300 duration-300 ml-3 hover:rounded-full">
                      <BiTrash className="m-0.5 sm:m-1 cursor-pointer h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" onClick={() => removeUser(u._id)} />
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <div className="flex justify-center items-center w-full h-[343px]">
                <h1 className={styles.heading}>Nothing to Show</h1>
              </div>
            )
          )}
        </div>
      )}
      <ToastContainer />
    </section>
  )
}

export default Admin
