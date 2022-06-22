import React,{useContext, useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import dataContext from '../Context/dataContext'
import axios from 'axios'

const Edit = () => {
    const [form,setForm] = useState({
      
        title:'',
        body:''
    })

    const {id} = useParams()
    console.log(id)
    const Navigate = useNavigate()

    const {state,dispatch} =useContext(dataContext)
    const UpdateDataById=async (e)=>{
        e.preventDefault()
       const response =  await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
             
            title:form.title,
            body:form.body

        })
        dispatch({type:'UPDATE_DATA',payload:response.data})
        Navigate('/dan')
        console.log(response.data)
     }
     console.log(state)
  return (
    <div>
        <h1>Edit</h1>
     {/*buat form dan inputan untuk edit data*/}
     <form onSubmit={UpdateDataById}>
        <input type="text" onChange={(e)=>setForm({...form,title : e.target.value})} placeholder="title" />
        <input type="text"  onChange={(e)=>setForm({...form,body : e.target.value})} placeholder="body" />
        <button>Submit</button>
     </form>



    </div>
  )
}

export default Edit