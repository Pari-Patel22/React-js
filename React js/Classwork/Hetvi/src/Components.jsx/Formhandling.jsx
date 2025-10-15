import React, { useState } from 'react'

export default function Formhandling() {

    const [formdata,setformdata]=useState({})
    const [record, setRecord]=useState([])

    const handlechange=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        }
        )
    }

    const handleSubmit=(e)=>{
         e.preventDefault();
         setRecord([
            ...record,formdata
         ])
         setformdata({
            name :"",
            subject:"",
            age:"",
            gender:"",
            city:""
         })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={formdata.name} placeholder='Enter your name ' onChange={(e)=>handlechange(e)}/>
        <input type="text" name='subject' value={formdata.subject} placeholder='Enter your subject' onChange={(e)=>handlechange(e)} />
        <input type="text" name='age' value={formdata.age} placeholder='Enter your age' onChange={(e)=>handlechange(e)} />
        <input type="radio" name="gender" value={'male'} id="" onChange={(e)=>handlechange(e)}/>Male
        <input type="radio" name="gender" value={'female'} id="" onChange={(e)=>handlechange(e)} />Female


        <select name="city" id="" value={formdata.city} onChange={(e)=>handlechange(e)}>
            <option hidden>Select your city</option>
            <option value="rajkot">Rajkot</option>
            <option value="surat">Surat</option>
            <option value="ahemdabad">Ahemdabad</option>
        </select>
        <button type='submit'>submit</button>
      </form>


    {
        record.map((e,i)=>{
            return(
                <ul key={i}>
                    <li>{e.name}</li>
                    <li>{e.subject}</li>
                    <li>{e.age}</li>
                    <li>{e.gender}</li>
                    <li>{e.city}</li>
                </ul>
            )
        })
    }

    </div>
  )
}
