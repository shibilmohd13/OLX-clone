import React from 'react'
import Body from './components/Body/Body'
import Layout from './components/Layout/Layout'
import Details from './components/Details/Details'
import Auth from './components/Auth/Auth'
import Sell from './components/Sell/Sell'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/details' element={<Details />} />
            <Route path='/auth-user' element={<Auth />} />
            <Route path='/sell' element={<Sell />} />
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App