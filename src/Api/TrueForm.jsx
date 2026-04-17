import React, {  useEffect, useState } from 'react'

const TrueForm = () => {
    const [users, setUsers]= useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(null)
    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
                setLoading(true)
                const res = await fetch('https://jsonplaceholder.typicode.com/users')   
                if(!res.ok){
                    throw new Error('Loading Faild')
                }  
                const data = await res.json()
                setUsers(data)      
            }catch(e){
                setError(e.message)
            }finally{
                setLoading(false)
            }
        }
        fetchUsers()
    },[])
    if(loading) return<p>Loading</p>
    if(error) return <p>{error}</p>
  return (
    <div>
        
        {
            users.map(user=>(
                <p key={user.id}>{user.name}</p>
            ))
        }
    </div>
  )
}

export default TrueForm