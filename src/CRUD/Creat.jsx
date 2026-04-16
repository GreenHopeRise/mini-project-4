import React, { useState } from 'react'

const Creat = () => {
    const [users, setUsers]= useState([
        {id: 1, name:'khalid'},
        {id:2, name:'phool'}
    ])
    const [name, setName]=useState('')
    const addUser = ()=>{
        const newUser ={
            id: Date.now(),
            name: name
        }
        setUsers([...users,newUser])
        setName('')
    }
  return (
    <div>
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={addUser}>Add User</button>

        {
            users.map((e)=>{
                return(
                    <p key={e.id}>{e.name}</p>
                )
            })
        }
    </div>
  )
}

export default Creat