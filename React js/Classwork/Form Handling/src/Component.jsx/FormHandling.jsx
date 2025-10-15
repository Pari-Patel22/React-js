import React, { useState } from 'react'

export default function FormHandling() {
    const [formdata, setFormdata] = useState({})
    const [record, setRecord] = useState([])

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formdata);
        setRecord([...record, formdata])

        setFormdata({
            Name: "",
            Subject: "",
            Age: "",
            gender: "",
            city: "",
        })
    }
  return (
    <div>
        <h1>Form Handling</h1>
     <form onSubmit={handleSubmit}>
        <input type="text" name='Name' value={formdata.Name} placeholder='Enter Your Name' onChange={(e) => handleChange(e)} required/>
        <input type="text" name='Subject' value={formdata.Subject} placeholder='Enter Your Subject' onChange={(e) => handleChange(e)} required/>
        <input type="text" name='Age' value={formdata.Age}  placeholder='Enter Your Age' onChange={(e) => handleChange(e)} required/>
        <input type="radio" value={"male"}  checked={formdata.gender == "male" && true} name='gender' onChange={(e) => handleChange(e)} required/>
        Male
        <input type="radio" value={"female"} checked={formdata.gender == "female" && true} name='gender' onChange={(e) => handleChange(e)} required/>
        Female

        <select  value={formdata.city}  onChange={(e)=> handleChange(e)} required name="city">
            <option hidden>Select Your City</option>
            <option value={"Rajkot"}>Rajkot</option>
            <option value={"Ahemdabad"}>Ahemdabad</option>
            <option value={"Surat"}>Surat</option>
            <option value={"Mumbai"}>Mumbai</option>
            <option value={"Delhi"}>Delhi</option>
        </select>

        <button type='Submit'>Submit</button>
     </form>
 {
            record.map((e,i)=>{
                return(
                    <ul key={i}>
                        <li>{e.Name}</li>
                        <li>{e.Subject}</li>
                        <li>{e.Age}</li>
                        <li>{e.gender}</li>
                        <li>{e.city}</li>
                        </ul>
                )
            })
        }
    </div>
  )
}
