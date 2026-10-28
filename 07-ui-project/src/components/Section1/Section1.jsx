import React from 'react'
import Navbar from '../Section1/Navbar'
import Page1content from '../Section1/Page1content'

const section1 = (props) => {
  return (
    <div>
      <Navbar/>
      <Page1content users={props.users}/>
    </div>
  )
}

export default section1
