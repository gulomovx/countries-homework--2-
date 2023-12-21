import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
      <div className=' w-[90%] mx-auto text-center bg-cyan-200 rounded p-12'>
          <h1 className='text-4xl'>404</h1>
          <h1 className='text-2xl mb-4'>Oops, wrong way!</h1>
          <NavLink className='mt-4 p-2 bg-blue-200 rounded' to='/'>
              Home
          </NavLink>
          

    </div>
  )
}

export default NotFound