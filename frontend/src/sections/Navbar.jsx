import React, { useEffect, useRef, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { RiPlantLine } from 'react-icons/ri';

import { useAuthContext } from '../hooks/useAuthContext';
import { usePlantsContext } from '../hooks/usePlantsContext';
import { useLogout } from '../hooks/useLogout';

const Sidebar = lazy(() => import('../components/Sidebar').then((module) => {
  return { default: module.Sidebar }
}))

const headlines = ["Home", "Store", "Technologies", "Contact"]

const Navbar = () => {
  const navbarRef = useRef()
  const { user, isAdmin } = useAuthContext()
  const { isPlantAdded } = usePlantsContext()
  const { logout } = useLogout()
  const { pathname } = useLocation()

  useEffect(() => {
    const height = navbarRef.current.getBoundingClientRect().height;
    document.body.style.paddingTop = `${height}px`
  }, [])

  return (
    <section id="Navbar">
      <div ref={navbarRef} className="w-full fixed top-0 left-0 right-0 z-10 flex p-2 justify-between items-center bg-gradient-to-r from-[#669660] to-[#99B896]">
        <Link className="flex justify-start items-center text-black cursor-pointer w-fit" to="/">
          <RiPlantLine className="text-black w-10 h-10 mx-4" />
          <h1 className="font-semibold text-xl">Flowerish</h1>
        </Link>
        <div className="flex-1 sm:flex justify-end items-center hidden mr-8">
          {pathname === '/' && (
            <div className="mr-4">
              {headlines.map((headline, index) => (
                <a key={index} className='mx-2 text-black hover:text-white duration-300 cursor-pointer' href={`#${headline}`}>
                  {headline}
                </a>
              ))}
            </div>
          )}
          <div className="mr-4 flex">
            {pathname !== '/' && (
              <>
                <Link className={`flex items-center px-3 py-1 cursor-pointer ${pathname === '/store' ? 'text-white' : 'text-black hover:text-white duration-300'}`} to="/store">
                  <span className="font-semibold">Store</span>
                </Link>
                <Link className={`relative flex items-center mx-3 my-1 cursor-pointer ${pathname === '/cart' ? 'text-white' : 'text-black hover:text-white duration-300'}`} to="/cart">
                  <BiCart className={`h-8 w-8`} />
                  {isPlantAdded !== 0 &&
                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-semibold text-black bg-red-400 rounded-full -top-2 -right-3">{isPlantAdded}</div>
                  }
                </Link>
              </>
            )}
          </div>
          {user ? (
            <>
              <div className="mx-1 px-3 py-1 text-center cursor-pointer bg-white hover:bg-[#99B896] rounded-[50px] duration-300">
                <button onClick={() => logout()}>Logout</button>
              </div>
              {isAdmin && <div className="mx-1 px-3 py-1 text-center cursor-pointer bg-white hover:bg-[#99B896] rounded-[50px] duration-300">
                <Link to="/admin">Admin</Link>
              </div>}
            </>
          ) : (
            <div>
              <Link className="mx-1 px-3 py-1 text-center cursor-pointer bg-white hover:bg-[#99B896] rounded-[50px] duration-300" to="/signup">Signup</Link>
              <Link className="mx-1 px-3 py-1 text-center cursor-pointer bg-white hover:bg-[#99B896] rounded-[50px] duration-300" to="/login">Login</Link>
            </div>
          )}
        </div>

        <div className="sm:hidden flex justify-end items-center">
          <Sidebar headlines={headlines} />
        </div>
      </div>
    </section>
  )
}

export default Navbar
