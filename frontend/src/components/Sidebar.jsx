import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useOnClickOutside } from 'usehooks-ts';
import { BiCart } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { useAuthContext } from '../hooks/useAuthContext';
import { usePlantsContext } from '../hooks/usePlantsContext';
import { useLogout } from '../hooks/useLogout';

const Sidebar = ({ headlines }) => {
  const { user, isAdmin } = useAuthContext()
  const { isPlantAdded } = usePlantsContext()
  const { logout } = useLogout()
  const { pathname } = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const ref = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (screenWidth > 620) {
      setIsOpen(false)
    }
  }, [screenWidth])

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      event.stopPropagation()
      setIsOpen(false)
    }
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <div ref={ref}>
      {isOpen ? "" : (
        <AiOutlineMenu className="cursor-pointer hover:text-white duration-300 mr-2 w-6 h-6" onClick={() => setIsOpen(!isOpen)} />
      )}
      <div className={`top-0 right-0 fixed bg-[#669660] w-[300px] h-full ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-out duration-300`}>
        <AiOutlineClose className="cursor-pointer hover:text-white duration-300 ml-3 mt-3 w-6 h-6" onClick={() => setIsOpen(!isOpen)} />
        <div className="p-6">
          <div className="flex flex-col items-start">
            {pathname === '/' && (
              <>
                {headlines.map((headline, index) => (
                  <a key={index} className="my-1 text-black hover:text-white duration-300 cursor-pointer" href={`#${headline}`} onClick={() => setIsOpen(false)}>
                    {headline}
                  </a>
                ))}
              </>
            )}
            <div className="mt-4 flex flex-col">
              {pathname !== '/' && (
                <>
                  <Link className={`flex items-center px-3 my-1 cursor-pointer ${pathname === '/store' ? 'text-white' : 'text-black hover:text-white duration-300'}`} to="/store" onClick={() => setIsOpen(false)}>
                    <span className="font-semibold">Store</span>
                  </Link>
                  <Link className={`relative flex items-center mx-3 my-1 cursor-pointer ${pathname === '/cart' ? 'text-white' : 'text-black hover:text-white duration-300'}`} to="/cart" onClick={() => setIsOpen(false)}>
                    <BiCart className={`h-8 w-8`} />
                    {isPlantAdded !== 0 &&
                      <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-semibold text-black bg-red-400 rounded-full -top-1.5 -right-1">{isPlantAdded}</div>
                    }
                  </Link>
                </>
              )}
            </div>
            {user ? (
              <>
                {isAdmin && <div className="px-3 py-1 mt-3 text-center cursor-pointer bg-white hover:bg-[#99B896] rounded-[50px] duration-300">
                  <Link to="/admin" onClick={() => setIsOpen(false)}>Admin</Link>
                </div>}
                <div className="px-3 py-1 mt-3 text-center cursor-pointer bg-white hover:bg-[#99B896] rounded-[50px] duration-300">
                  <button onClick={() => logout()}>Logout</button>
                </div>
              </>
            ) : (
              <div className="flex flex-col">
                <Link className="px-3 py-1 mt-3 text-center cursor-pointer bg-white hover:bg-[#99B896] rounded-[50px] duration-300" to="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
                <Link className="px-3 py-1 mt-3 text-center cursor-pointer bg-white hover:bg-[#99B896] rounded-[50px] duration-300" to="/login" onClick={() => setIsOpen(false)}>Login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Sidebar }
