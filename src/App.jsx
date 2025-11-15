import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Layout from './component/Layout/Layout'
import Calendar from './pages/Calendar/Calendar'
import Board from './pages/Board/Board'
import User from './pages/User/User'


const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='calender' element={<Calendar/>} />
            <Route path='board' element={<Board/>} />
            <Route path='users' element={<User/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
