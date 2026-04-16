import React, { useState } from 'react'

const Delete = () => {
    const [data, setData]= useState([
        {id: 1, name: 'khalid'}
    ])
    const [name, setName] = useState('')
    const handleAdd = ()=>{
        const newName = {
            id: Date.now(),
            name: name
        }
        setData([...data, newName])
        setName('')
    }
    const handleDelete = (id)=>{
        const updateUsers = data.filter((u)=> u.id!==id)
        setData(updateUsers)
    }

  return (
    <div>
        <input type="text" name="name" 
        value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={handleAdd}>Submit</button>
        <h1>Data Read</h1>
        {
            data.map((d)=>{
                return(
                    <p key={d.id}>
                        <p>{d.name}</p>
                        <button onClick={()=>{handleDelete(d.id)}}>Delete</button>
                        
                        </p>
                    
                )
            })
        }

    </div>
  )
}

export default Delete