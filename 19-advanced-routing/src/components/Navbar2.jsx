import React from 'react'
import { useNavigate } from 'react-router-dom'



const Navbar2 = () => {

const navigate=useNavigate()

  return (
    <div className='bg-blue-300'>
      <button className='bg-emerald-800 p-3 m-3 font-medium cursor-pointer rounded-xl active:scale-90' onClick={()=>{
        navigate('/')
      }}>Return to Home</button>

      <button className='bg-emerald-800 p-3 m-3 font-medium cursor-pointer rounded-xl active:scale-90' onClick={()=>{
        navigate(-1)
      }}>Back</button>

    <button className='bg-emerald-800 p-3 m-3 font-medium cursor-pointer rounded-xl active:scale-90' onClick={()=>{
        navigate(+1)
      }}>Next</button>

    </div>
  )
}

export default Navbar2
