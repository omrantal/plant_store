import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Spinner } from '../components/Spinner';

import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoading, error } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? (
        <div className="w-full flex flex-col justify-center items-center">
          <Spinner height="400px" />
        </div>
      ) : (
        <div className="w-[300px] h-[400px] flex flex-col justify-between items-center rounded-lg border-2 border-gray-200 text-white shadow-lg shadow-gray-200 bg-gradient-to-t from-[#669660] to-[#99B896]">
          <form className="w-full p-4" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} className="inputClass" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} className="inputClass" />
            <div className="mt-10 text-center">
              <button className="py-2 px-4 text-white cursor-pointer hover:bg-[#99B896] hover:scale-110 duration-300" disabled={isLoading}>Login</button>
            </div>
            {error && <div className="p-2 text-center font-bold text-[#e7195a] border-[2px] border-solid border-[#e7195a] rounded-md mt-6 animate-pulse">{error}</div>}
          </form>
          <p className="text center mb-10">
            Not Signed up before? <Link to="/signup" className="underline cursor-pointer">Signup</Link>
          </p>
        </div>
      )}
    </div>
  )
}

export default Login
