import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import { PlantsContextProvider } from './context/PlantsContext';
import { AuthContextProvider } from './context/AuthContext';

import { ScrollToTop } from './components/ScrollToTop';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <PlantsContextProvider>
          <ScrollToTop />
          <App />
        </PlantsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
