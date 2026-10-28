import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Card = (props) => {
  return (
    <div className='h-full w-80 relative shrink-0 overflow-hidden bg-red-400 rounded-4xl'>
      <img className='w-full h-full object-cover' src={props.img} alt="" />
      <Rightcardcontent id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default Card
