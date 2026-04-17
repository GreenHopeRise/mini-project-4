import React, { useEffect, useState } from 'react'

const Learning = () => {
    const [user, setUser]= useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((data)=>setUser(data))
    
      
    }, [])
    
  return (
    <div>
        <h2>Users</h2>
        {
            user.map(u=>(
                <p key={u.id}>{u.id}: {u.name}</p>
            ))
        }
    </div>
  )
}

export default Learning