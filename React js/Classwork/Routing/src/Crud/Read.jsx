import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

export default function () {
  const navigate = useNavigate()

  const [record, setRecord] = useState([])

  useEffect(()=>{
    let allRecord = JSON.parse(localStorage.getItem("record")) || []
    setRecord(allRecord)
  },[])

  const handleDelete = (id)=>{
    let filteredData = record.filter((item)=>item.id != id)
    localStorage.setItem("record",JSON.stringify(filteredData))
    setRecord(filteredData)
    toast.success('Delete Successfully!')


  }

  const handleEdit = (id)=>{
    navigate("/add",{state:{stid:id}})
   
  }


  return (
    <div>
      <Toaster
  position="bottom-right"
  reverseOrder={true}
/>
      <h1>Read</h1>
     <Link to={"/add"}>
     <button>Add Data</button></Link>
      {
        record ?
        record.map((e,i)=>{
          return <ul key={i}>
            <li>{i+1}</li>
            <li>{e.name}</li>
            <li>{e.age}</li>
            <li><button onClick={()=>handleEdit(e.id)}>Edit</button></li>
            <li><button onClick={()=>handleDelete(e.id)}>Delete</button></li>
          </ul>
        }) : <p>NO RECORD</p>
      }
    </div>
  )
}
