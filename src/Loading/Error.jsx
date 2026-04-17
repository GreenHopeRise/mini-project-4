import React, { useState } from "react";

const Errors = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchUser = () => {
        setLoading(true);
        setError(null);
        setTimeout(() => {
            try{
                const suc = Math.random()>0.5
                if(!suc){
                    throw new Error('Faild to load')
                }
                setUser([
                    {id:1, name:'khalid'}
                ])
            }catch(e){
                setError(e.message)

            }finally{
                setLoading(false)
            }
            
        }, 500);
        
    };
    return (
        <div>
            <button onClick={fetchUser} disabled={loading}>
                {loading ? "Loading..." : "Load User"}
            </button>
            {
                error && <p>{error}</p>
            }
            {
                !error && !loading &&
                user.map(u=>(
                    <p key={u.id}>{u.name}</p>
                ))
            }
            
        </div>
    );
};

export default Errors;
