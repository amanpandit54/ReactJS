import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const users=[
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    color:'blue',
    tag:'Satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    color:'green',
    tag:'Underserved'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    color:'amber',
    tag:'Underbanked'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'',
    color:'red',
    tag:'Unsatisfied'
  }
]

const App = () => {
  return (
    <div>
     <Section1 users={users}/>
     <Section2/>
    </div>
  )
}

export default App
