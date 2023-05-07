import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Spinner } from '../components/Spinner';

import { useAuthContext } from '../hooks/useAuthContext';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isLoading, error } = useSignup()
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await signup(username, email, password)
  }

  if (user) {
    navigate('/')
  }

  return (
    <section className="flex justify-center items-center h-screen">
      {isLoading ? (
        <div className="w-full flex flex-col justify-center items-center">
          <Spinner height="400px" />
        </div>
      ) : (
        <div className="w-[300px] h-[400px] flex flex-col justify-between items-center rounded-lg border-2 border-gray-200 text-white shadow-lg shadow-gray-200 bg-gradient-to-t from-[#669660] to-[#99B896]">
          <form className="h-52 w-full p-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} className="inputClass" />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} className="inputClass" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} className="inputClass" />
            <div className="mt-10 text-center">
              <button className="py-2 px-4 text-white cursor-pointer hover:bg-[#99B896] hover:scale-110 duration-300" disabled={isLoading}>Signup</button>
            </div>
            {error && <div className="p-2 text-center font-bold text-[#e7195a] border-[2px] border-solid border-[#e7195a] rounded-md mt-6 animate-pulse">{error}</div>}
          </form>
          <p className="text center mb-10">
            Signed up before?, just <Link to="/login" className="underline cursor-pointer">Login</Link>
          </p>
        </div>
      )}
    </section>
  )
}

export default Signup
