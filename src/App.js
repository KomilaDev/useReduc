// import React from 'react'
// import { useReducer } from 'react'

// function App() {

//   const reducer =(state,action)=> {
//    switch (action.type){
//     case "Increment":{
//       return state+1
//     }
//     case "Decrement":{
//       return state-1
//     }
//     case "Reset":{
//       return 0
//     }
//     default:return state;
//    }
//   }

//  const initialState = 0
// const [count, dispatch] = useReducer(reducer,initialState)

// return (



import React from 'react'
import Hook from './Components/Hook'

function App() {
  return (
    <h1>{Hook()}</h1>

  )
}

export default App
