import React, { useState } from 'react'

const Loading = () => {
    const [users, setUsers]= useState([])
    const [loading, setLoading] = useState(false)
    const fetchUsers = ()=>{
        setLoading(true)
        setTimeout(() => {
            setUsers([
                {id:1,  name: 'khalid'},
                {id:2,  name: 'Phool'},
                {id:3,  name: 'khalid'},
            ])
            setLoading(false)
        }, 2000);
    }
  return (
    <div>
        <button onClick={fetchUsers}>Load Data</button>
        {loading && <p>Loading...</p>}
        {
            !loading && 
            users.map(user =>(
                <p key={user.id}>{user.name}</p>
            ))
        }

    </div>
  )
}

export default Loading