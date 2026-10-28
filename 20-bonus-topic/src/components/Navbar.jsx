import React from 'react'

const Navbar = (props) => {

const clicked=()=>{
    props.setTheme('dark')
}

  return (
    <div>
      <button onClick={clicked} >Change theme</button>
    </div>
  )
}

export default Navbar
