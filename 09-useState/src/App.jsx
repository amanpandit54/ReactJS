// import React, { useState } from 'react'



// const App = () => {

//   const [num,setNum]=useState(10);
// const [username,setUsername]=useState('Aman');

// function changed() {
//   setNum(20);
//   setUsername('Hero')
  
// }


//   return (
//     <div>
//       <h2>The value of num is {num} and username is {username}</h2>
//       <button onClick={changed}>Click here to change</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

// const [num,useNum]=useState(0);
// function inc(){
//   useNum(num+1);
// }
// function dec(){
//   useNum(num-1);
// }


//   return (
//     <div>
//       <h2>{num}</h2>
//       <button onClick={inc}>Increase</button>
//       <button onClick={dec}>Decrease</button>
//     </div>
//   )
// }

// export default App


import React,{useState} from 'react'


const App = () => {

const [user,setUser]=useState({name:'Aman', age:20})
const clicked = () =>{
  let newUser={...user}
  newUser.name='Hero'
  newUser.age=25
  setUser(newUser)

  //Another method
  // setUser(prev=>({...prev,age:50}))

}
// const btnClicked=()=>{
//   setNum(prev=>(prev+1));
//   setNum(prev=>(prev+1));
//   setNum(prev=>(prev+1));
// } This is called batch update



  return (
    <div>
      <h2>{user.name} is {user.age} years old</h2>
      <button onClick={clicked}>Click to change</button>
    </div>
  )
}

export default App
