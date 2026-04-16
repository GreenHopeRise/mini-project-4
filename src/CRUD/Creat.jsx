import React, { useState } from 'react'

const Creat = () => {
    const [data, setData] = useState([
        {id:1, name:'Khalid'}
    ])
    const [name, setName] =  useState('')
    const handleChange = ()=>{
        const newName = {
            id: Date.now()
            , name: name
        }
        setData([...data, newName])
        setName('')
    }
  return (
    <div>
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={handleChange}>Submit</button>
        {
            data.map((d)=>{
                return(
                    <p key={d.id}>{d.name}</p>
                )
            })
        }
    </div>
  )
}

export default Creat