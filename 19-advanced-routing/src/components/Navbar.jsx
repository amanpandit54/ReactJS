import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-xl font-bold items-center px-3 py-5 justify-between bg-blue-400 flex'>
      <h2 className='text-xl font-bold'>Navbar</h2>
      <div className='flex gap-8'>
        <Link to='./'>Home</Link>
        <Link to='./About'>About Us</Link>
        <Link to='./contact' >Contact Us</Link>
        <Link to='./Products'> Products</Link>
        <Link to='./Courses' >Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
