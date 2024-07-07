import React from 'react'
import Create from './Create'
import { Route, Routes } from 'react-router-dom'
import Read from './Read'
import Update from './Update'
import Navigation from './Navigation'
import Tanstack from './Tanstack'
import Avsilsibility from './Avsilsibility'

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Create/>} />
        <Route path='/read' element={<Read/>} />
        <Route path='/update' element={<Update/>} />
        <Route path='/tanstack' element={<Tanstack/>} />
        <Route path='/availability' element={<Avsilsibility/>} />

      </Routes>
      
    </div>
  )
}

export default App