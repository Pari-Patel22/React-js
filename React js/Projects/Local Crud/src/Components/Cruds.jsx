import React, { useState } from 'react'

export default function () {
  const [formdata,setFormdata]=useState({})
  const [record, setRecord]=useState([])

  const handleChange=(e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handlesubmit =(e)=>{
    e.preventDefault()
    setRecord([...record,formdata])
  }

  setFormdata({
    Email: "",
    age : "",
    city : ""
  })

  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input type="text" onChange={(e)=>handleChange} placeholder='Enter your Email'/>
        <input type="text" onChange={(e)=>handleChange} placeholder='Enter your age'/>

<select name="" id="" onChange={(e)=>handleChange}>
  <option value="" hidden>Select your city</option>
  <option value="" >Rajkot</option>
  <option value="" >ahemdabad</option>
  <option value="" >surat</option>

</select>
  <button>Add Data</button>
      </form>
    </div>
  )
}
