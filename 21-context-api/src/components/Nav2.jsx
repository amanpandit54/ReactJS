import React, { useContext } from 'react'
import { ThemeDataContext } from '../context.jsx/ThemeContext'


const Nav2 = () => {
  return (
    <div className='flex gap-5 text-2xl'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Products</h4>
    </div>
  )
}

export default Nav2
