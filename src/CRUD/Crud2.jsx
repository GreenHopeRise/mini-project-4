import React, { useState } from 'react'

const Crud2 = () => {
    const [users, setUsers] = useState([
        {id:1, name:'Afrin'}
    ])
    const [name, setName] = useState('')
    const [editName, setEditName]= useState('')
    const [editId, setEditId]= useState(null)
    const handleAdd = ()=>{
        const newName = {
            id: Date.now(),
            name: name
        }
        setUsers([...users, newName])
        setName('')
    }
    const handleDelete = (id)=>{
        const filters = users.filter((user)=>user.id!==id)
        setUsers(filters)

    }
    const handleEdit = (user)=>{
        setEditId(user.id)
        setEditName(user.name)
    }
    const handleSave = (id)=>{
        const updatedUsers = users.map((user)=>user.id===id?{...user, name: editName}:user)
        setUsers(updatedUsers)
        setEditId(null)
        setEditName('')
    }
  return (
    <div>
        <label htmlFor="">Enter Name: </label>
        <input 
        value={name}
        onChange={e=>setName(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        {
            users.map(user=>(
                <div key={user.id}>
                    {
                        editId===user.id?
                        <span><input value={editName} onChange={(e)=>setEditName(e.target.value)} /> <button onClick={()=>handleSave(user.id)}>Save</button></span>:<span>{user.name}</span>
                    }
                    <button onClick={()=>handleDelete(user.id)}>Delete</button>
                    <button onClick={()=>handleEdit(user)}>Edit</button>
                </div>
                
            ))
        }
    </div>
  )
}

export default Crud2