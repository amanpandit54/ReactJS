import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

const [theme,setTheme]=useState('light')

  return (
    <div>   
      <h2>The theme is {theme}</h2>

      {/* Used to send props from child to parent */}
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
