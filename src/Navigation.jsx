import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navigation() {
    const navigate=useNavigate()
  return (
    <div><button onClick={()=> navigate(-1)}>
       Back </button></div>
  )
}

export default Navigation