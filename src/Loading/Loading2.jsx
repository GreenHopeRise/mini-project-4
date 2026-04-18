import React, { useState } from 'react'

const Loading2 = () => {
    const [users, setUsers]= useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(null)
    const loadUsers = ()=>{
        setLoading(true)
        setError(null)
        setTimeout(() => {
            try{
                const s = Math.random()> 0.5
            if(!s){
                throw new Error('Faild Data')
            }
            setUsers([
                {id: 1, name: 'khalid'},
                {id: 2, name: 'khalid'},
                {id: 3, name: 'khalid'},
                {id: 4, name: 'khalid'},
            ])
            }catch(e){
                setError(e.message)
            }finally{
                setLoading(false)
            }
            
        }, 2000);
    }
    
  return (
    <div>
        <button onClick={loadUsers}>{loading?'loading..':'load'}</button>
        {error&& <p>{error}</p>}

        { !error && !loading &&
            users.map(user => (
                <p>{user.name}</p>
            ) )
        }
    </div>
  )
}

export default Loading2