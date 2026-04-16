import React, { useState } from 'react'

const Up = () => {
    const [users, setUsers]= useState([
        {id: 1, name: 'Phool'},
        {id: 2, name: 'Khalid'}
    ])
    const [editName, setEditName] = useState('')
    const [editId, setEditId] = useState(null)
    const handleEdit = (user)=>{
        setEditId(user.id) 
        setEditName(user.name)

    }
    const handleSave = (id)=>{
        const updateName = users.map(u=>(
            u.id===id?(
                {...u, name: editName}
            ):(u)
        ))
        setUsers(updateName)
        setEditId(null)
        setEditName('')

    }
  return (
    <div>
        {
            users.map(user=>(
                <div key={user.id}>
                    {
                        editId===user.id?(
                            <>
                            <input type="text" value={editName} onChange={(e)=>setEditName(e.target.value)} />
                            <button onClick={()=>handleSave(user.id)}>Save</button>
                            </>
                        ):(
                            <p>{user.name}</p>
                        )

                    }
                    <button onClick={()=> handleEdit(user)}>Update</button>
                </div>
            ))
        }
    </div>
  )
}

export default Up