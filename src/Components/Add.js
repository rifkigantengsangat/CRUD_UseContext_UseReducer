import React,{useContext, useEffect, useState}from 'react'
import {useNavigate} from 'react-router-dom'
import dataContext from '../Context/dataContext'
import axios from 'axios'


const Add = () => {
    const navigate = useNavigate()
    const [id,setId] = useState('')
//    const mathRan = (min,max)=>{
//     return Math.floor(Math.random()*(max-min+1)+min)
//    }
// const userId = mathRan(100,200)
//     setId(userId)
    const {state,dispatch} = useContext(dataContext)
    const [form,setForm] = useState({
        id : id ,
        title:'',
        body:''

    })
    useEffect(()=>{
        const mathRan = (min,max)=>{
            return Math.floor(Math.random()*(max-min+1)+min)
           }
        const userId = mathRan(100,200)
            setId(userId)
    },[id])
    
const addData = async(e)=>{
    e.preventDefault()
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',form)
    dispatch({type:'ADD_DATA',payload:response.data})
    console.log(response.data)
    
    // navigate('/dan')    

}

  return (
    <div>
        <h1>Add</h1>
       
        <form onSubmit={addData}>
            <input type="text" onChange={(e)=>setForm({...form,title : e.target.value})} placeholder="title" />
            <input type="text"  onChange={(e)=>setForm({...form,body : e.target.value})} placeholder="body" />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Add