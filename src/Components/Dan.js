import React,{useContext, useEffect, useState}from 'react'
import axios  from 'axios'
import dataContext from '../Context/dataContext'
import {Link} from  'react-router-dom'

const Dan = () => {
    const {state,dispatch} =useContext(dataContext)
    console.log(state.data)
 const filterData = state.data.filter((item,i) => i<20)
const UpdateDataById=async (id)=>{
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`)
    dispatch({type:'UPDATE_DATA',payload:id})
 }
  const DeleteDataById=async (id)=>{
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    dispatch({type:'DELETE_DATA',payload:id})

  }
 
 useEffect(()=>{
   dispatch({type:'FILTER_DATA',payload:filterData})
 },[dispatch])
 
  return (
    <div>
      <Link to= '/add' >Add</Link>
    {state.loading?<h1>Loading</h1>:<h1>{state.data.map(e=>{
      return (
        <div key={e.id}>
        <h1>{e.title}</h1>
        <h1>{e.body}</h1>
        <button onClick={()=>UpdateDataById(e.id)}>Update</button>
        <button onClick={()=>DeleteDataById(e.id)}>Delete</button>
        <Link to={`/edit/${e.id}`}>Edit</Link>
        </div>
      )
    })}</h1>}
    </div>
  )
}

export default Dan