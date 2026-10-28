import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';

// const App = () => {

//   const [data,setData]=useState([]);

// //  const getData=async ()=>{
// //   const response =await fetch('https://jsonplaceholder.typicode.com/posts')
// //   const data=await response.json()
// //   console.log(data);
  
// const getData=async ()=>{
//   const response = await axios.get('https://picsum.photos/v2/list')
//   // console.log(response.data);
//   setData(response.data)
  

// }

//   return (
//     <div>
//       <button onClick={getData}>get data</button>
//       <div>
//         {data.map(function(elem,idx){
//           return <h3>Hello,{idx}</h3>
//         })}
//       </div>

//     </div>
//   )
// }

// export default App



const App = () => {
const [num,setNum]=useState(0);
const [num2,setNum2]=useState(100);

const clicked=()=>{
  setNum(num+1)
  setNum2(num2+1)
}

useEffect(function(){
  console.log('useeffect is running...')
  
},[num])

  return (
    <div>
      <h1>Num:{num}</h1>
      <h1>Num2:{num2}</h1>
      <button onClick={clicked}>Press</button>
    </div>
  )
}

export default App

