import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <div className='flex text-3xl justify-center gap-10'>
            <Link to='/Products/Men'>Men</Link>
            <Link to='/Products/Women' >Women</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Products
