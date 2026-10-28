import React, { useContext } from 'react'
import { ThemeDataContext } from '../context.jsx/ThemeContext'


const Button = () => {
    const [theme,setTheme]=useContext(ThemeDataContext)

    const changeTheme=()=>{
            if(theme=='light')
                setTheme('dark')
            else
                setTheme('light')

    }

  return (
    <div>
      <button className='bg-blue-400 m-4 p-4 rounded-xl text-2xl' onClick={changeTheme}>Change theme {theme}</button>
    </div>
  )
}

export default Button
