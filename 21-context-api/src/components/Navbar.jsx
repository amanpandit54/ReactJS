import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context.jsx/ThemeContext'

const Navbar = () => {

const [theme,setTheme]=useContext(ThemeDataContext)


  return (
    <div className={theme}>
    <div className='flex p-6 w-full justify-between'>
      <h1 className='font-bold text-3xl'>Rahul Coding</h1>
      <Nav2/>
    </div>
    </div>
  )
}

export default Navbar
