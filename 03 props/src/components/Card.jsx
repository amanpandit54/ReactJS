import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img}/>
      <h1>{props.username},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
