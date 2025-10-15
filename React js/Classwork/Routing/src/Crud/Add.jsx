import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

export default function add() {

    const [formdata, setFormdata] = useState({});
    const navigate = useNavigate()

    const locationObj = useLocation();

    useEffect(()=>{
      if (locationObj.state){
        let allData = JSON.parse(localStorage.getItem("record")) || [];
         let singleData = allData.find(
          (item) => item.id == locationObj.state.stid
         );
         setFormdata(singleData);
      }
    },[]);

    const handleChange = (e)=> {
        setFormdata({
            ...formdata,
            id:Date.now(),
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = ()=>{
        let allData = JSON.parse(localStorage.getItem("record")) || [];
        if (!locationObj.state){
          allData.push(formdata);
        }else { 
          let singleData = allData.find(
            (item) => item.id == locationObj.state.stid
          );
          singleData.name = formdata.name;
          singleData.age = formdata.age;
        }
        localStorage.setItem("record",JSON.stringify(allData))
        toast.success('Edit Successfully!')
        setTimeout(()=>{
          navigate("/")
        }, 2000
      );
      
    };


  return (
    <div>
       <Toaster
  position="bottom-right"
  reverseOrder={true}
/>
      <h1>ADD</h1>
      <input type="text" placeholder='Enter your name' name='name' value={formdata.name} onChange={handleChange} />
      <input type="text" placeholder='Enter your age' name='age' value={formdata.age} onChange={handleChange} />
      <button onClick={handleSubmit}>
         {locationObj.state ? "update data" : "Add Data"}
      </button>
     
    </div>
  )
}
