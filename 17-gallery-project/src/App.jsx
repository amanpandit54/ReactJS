import React,{useState} from 'react'
import axios from 'axios'

const App = () => {

  const [userData,setUserData]=useState([])

  const getData=async()=>{
    const response=await axios.get('https://picsum.photos/v2/list?page=2&limit=10')

    // console.log(response.data);

    setUserData(response.data);    
    
  }

  let printUserData='No user available'
  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div> <div className='h-50 w-50'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h3>{elem.author}</h3>
      </div>
    })
  }


  return (
    <div className='bg-black h-screen w-full text-white overflow-auto'>
      <button className='bg-green-500 active:scale-95 p-4 m-7 text-2xl rounded-2xl' onClick={getData}>Get data</button>


      <div className='flex flex-wrap gap-4'>{printUserData}</div>
    </div>
  )
}

export default App
