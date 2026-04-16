import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        phone:''
    })
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
  return (
    <div>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        <p>{JSON.stringify(formData)}</p>
    </div>
  )
}

export default Form