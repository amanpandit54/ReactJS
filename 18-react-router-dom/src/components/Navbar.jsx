import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div>Navbar</div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
