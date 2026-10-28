import React from 'react'

// const mouseClicked=()=>{
//   console.log('Mouse is clicked');
// }
// const mouseEntered = () =>{
//   console.log('Mouse is entered');
  
// }

// const inputChanged=(val)=>{
//   console.log(val);
  
// }

// const location =(val)=>{
//   console.log(val);
  
// }
const onScrolling=(val)=>{
  if(val>0)
    console.log('seedha scrolling');
  else
    console.log('ulta scrolling');
}

const App = () => {
  return (
    <div>
      {/* <button onMouseEnter={mouseEntered} onClick={mouseClicked}>Click here</button>
      <button>Explore this!!</button> */}

      {/* <input onChange={ function(elem){
        inputChanged(elem.target.value)
      }
      } type="text" placeholder='Enter Name...'/> */}

      {/* <div className='box' onMouseMove={(elem)=>{
        location(elem.clientX)
      }
      }></div> */}

        <div onWheel={(elem)=>{
          onScrolling(elem.deltaY)
        }}>
          <div className='page1'></div>
          <div className='page2'></div>
          <div className='page3'></div>
        </div>


    </div>
  )
}

export default App
