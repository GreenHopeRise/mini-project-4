import React, { useState } from 'react'

const Update = () => {
    const [users, setUsers] = useState([
        {name:'Khalid', id: 1},
        {name: 'phool', id: 2}
    ])
    const [editId, setEditId] = useState(null)
    const [editName, setEditName] = useState('')
    const handleEdit = (user) =>{
        setEditId(user.id)
        setEditName(user.name)
    }
    const handleUpdate = (userid)=>{
        const updateUser = users.map(user =>
            user.id === userid ? {...user,name: editName}:user
        )
        setUsers(updateUser)
        setEditId(null)
        setEditName('')

    }
  return (
    <div>
        <h2>Update users</h2>
        {
            users.map(user =>(
                <div key={user.id}>
                    {
                        editId=== user.id ?(
                            <>
                            <input type="text" value={editName}
                            onChange={(e)=>setEditName(e.target.value)}  />
                            <button onClick={()=>handleUpdate(user.id)}>Save</button>
                            </>
                            
                        ):(
                            <span>{user.name}</span>
                        )
                    }
                    <button onClick={()=>handleEdit(user)}>Edit</button>
                </div>
            ))
        }
    </div>
  )
}

export default Update