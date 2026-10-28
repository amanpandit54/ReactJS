import React from 'react'
import Card from './Card'

const RightContent = (props) => {
  // console.log(props.users);
  
  return (
    <div className='p-6 h-full w-2/3 rounded-4xl flex flex-nowrap gap-8 overflow-x-auto' id='right'>
      {
        props.users.map(function(elem,idx){
          return <Card key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
        })
      }
    </div>
  )
}

export default RightContent
