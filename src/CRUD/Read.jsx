import React, { useState } from 'react'

const Read = () => {
    const [users]= useState([
        {id:1, name: 'Khalid'},
        {id:2, name: 'Phool'},
        {id:2, name: 'Jui'},
    ])

  return (
    <div>
        {
            users.map((user)=>{
                return(
                    <p key={user.id}>{user.name}</p>
                )
            })
        }
    </div>
  )
}

export default Read