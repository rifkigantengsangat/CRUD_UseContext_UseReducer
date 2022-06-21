import React,{useContext,useEffect} from 'react'
import dataContext from '../Context/dataContext'
import userContext from '../Context/userContext'
const Home = () => {
    const {state,dispatch} = useContext(dataContext)
    console.log(state.data)
   
   
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'INCREMENT' })}>Increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default Home