import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Layout from './pages/Layout/Layout'

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
