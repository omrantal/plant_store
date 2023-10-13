import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'))
const Signup = lazy(() => import('./pages/Signup'))
const Login = lazy(() => import('./pages/Login'))
const Store = lazy(() => import('./pages/Store'))
const Plant = lazy(() => import('./pages/Plant'))
const Cart = lazy(() => import('./pages/Cart'))
const Admin = lazy(() => import('./pages/Admin'))

const Navbar = lazy(() => import('./sections/Navbar'))
const Footer = lazy(() => import('./sections/Footer'))

import { useAuthContext } from './hooks/useAuthContext';
import { Spinner } from './components/Spinner';

const App = () => {
  const { user } = useAuthContext()

  return (
    <div className="font-poppins">
      <Suspense fallback={<Spinner height="20px" width="60px" />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<Spinner height="300px" />}>
        <Routes>
          <Route path='/' element={<><Home /> <Footer /></>} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
          <Route path='/login' element={!user ? <Login />: <Navigate to='/' />} />
          <Route path='/store' element={<><Store /> <Footer /></>} />
          <Route path='/store/:id' element={<><Plant /> <Footer /></>} />
          <Route path='/cart' element={<><Cart /> <Footer /></>} />
          <Route path='/admin' element={user && user.role === 'ADMIN' ? <Admin /> : <Navigate to='/' />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

//dl.dropboxusercontent.com



/*
return (
    <div className="font-poppins">
      <Suspense fallback={<Spinner height="20px" width="60px" />}>
        <Navbar />
      </Suspense>
      <Routes>
        <Route path='/' element={<Suspense fallback={<Spinner height="300px" />}><Home /> <Footer /></Suspense>} />
        <Route path='/signup' element={!user ? <Suspense fallback={<Spinner height="300px" />}><Signup /></Suspense> : <Navigate to='/' />} />
        <Route path='/login' element={!user ? <Suspense fallback={<Spinner height="300px" />}><Login /></Suspense> : <Navigate to='/' />} />
        <Route path='/store' element={<Suspense fallback={<Spinner height="300px" />}><Store /> <Footer /></Suspense>} />
        <Route path='/store/:id' element={<Suspense fallback={<Spinner height="300px" />}><Plant /> <Footer /></Suspense>} />
        <Route path='/cart' element={<Suspense fallback={<Spinner height="300px" />}><Cart /> <Footer /></Suspense>} />
        <Route path='/admin' element={<Suspense fallback={<Spinner height="300px" />}><Admin /></Suspense>} />
      </Routes>
    </div>
  )
*/