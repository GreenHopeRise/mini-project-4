import React, { useState } from 'react'

const Practicet = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const handleLoading = ()=>{
        setLoading(true)
        setError(null)
        setTimeout(() => {
            try{
                const success = Math.random()>0.5
                if(!success){
                    throw new Error('Data did not load failed')
                }
                setUsers([{name: 'Khalid', id: '1'}, {name: 'phool', id: '2'}])
            }catch(e){
                setError(e.message)
            }finally{
                setLoading(false)
            }
            
        }, 2000);
    }
  return (
    <div>
        <button onClick={handleLoading}>{loading?'Loading':'Load'}</button>
        {
            error&&<p>{error}</p>
        }
        {
            !error&&!loading
            && users.map(user=>(
                <p key={user.id}>{user.name}</p>
            ))
        }
    </div>
  )
}

export default Practicet