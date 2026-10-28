import React from 'react'

const App = () => {
  // localStorage.setItem('user','Rahul')
  // localStorage.setItem('age',20)
  // const user = localStorage.getItem('user')
  // console.log(user);
  // localStorage.removeItem('age')
  const user={
    'username':'Rahul',
    'age':21,
    city:'Pune'
  }
  localStorage.setItem('user',JSON.stringify(user))

  const getUser= JSON.parse(localStorage.getItem('user'))
  console.log(getUser);
  

  return (
    <div>
      App
    </div>
  )
}

export default App
