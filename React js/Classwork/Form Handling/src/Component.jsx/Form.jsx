import React, { useState } from 'react'

export default function Form() {

    const [formdata, setFormdata]=useState({})
    const [record, setRecord]=useState([])

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div>
        <h1>FormHandling</h1>
        <form>
      <input type="text" name='name' placeholder='Enter Your Name' onChange={(e) => handleChange (e)}/>
      <input type="text" name='subject' placeholder='Enter Your Subject' onChange={(e) => handleChange (e)}/>
      <input type="text" name='age' placeholder='Enter Your Age' onChange={(e) => handleChange (e)} />
      <input type="radio" name='gender' value={"male"}/>Male
      <input type="radio" name='gender' value={"female"}/>Female

      <select name="" id="" onChange={(e) => handleChange (e)}>
        <option value="" hidden>Select Your City</option>
        <option value="Rajkot">Rajkot</option>
        <option value="Amreli">Amreli</option>
        <option value="Surat">Surat</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Ahemdabad">Ahemdabad</option>
      </select>

      <button type='Submit' >Submit</button>
      </form>
    </div>
  )
}
