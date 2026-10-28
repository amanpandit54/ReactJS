import React from 'react'

const Rightcardcontent = (props) => {
  return (
    
      <div className='p-8 flex flex-col justify-between h-full w-full top-0 left-0 absolute '>
        <h2 className='bg-white rounded-full h-10 w-10 items-center justify-center text-xl font-semibold flex'>{props.id + 1}</h2>
        <div>
            <p className=' text-shadow-2xs text-lg leading-relaxed text-white mb-10 w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias perspiciatis odio repellat adipisci temporibus dolor?</p>
            
            <div className='flex justify-between bg-{props.color}-600'>
                <button style={{backgroundColor:props.color}} className='bg-blue-500 text-white px-6 py-2 font-medium rounded-full'>{props.tag}</button>
            <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-full'><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    
  )
}

export default Rightcardcontent
