import React, { useState } from "react";

const Practice = () => {
    const [users, setUsers] = useState([{ name: "Khalid", id: 1 }]);
    const [name, setName] = useState("");
    const [editName, setEditName] = useState("");
    const [editId, setEditId] = useState(null);
    const addName = () => {
        const newName = {
            id: Date.now(),
            name: name,
        };
        setUsers([...users, newName]);
        setName("");
    };
    const handleDelete = (id) => {
        const filter = users.filter((user) => id !== user.id);
        setUsers(filter);
    };
    const handleEdit = (user) => {
        setEditId(user.id);
        setEditName(user.name);
    };
    const handleSave = (id)=>{
        const updateData = users.map(user=>
            user.id === id ? {...user, name: editName}:user
            
        )
        setUsers(updateData)
            setEditId(null)
            setEditName('')
    }
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={addName}>Submit</button>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        {user.id === editId ? (
                            <div>
                                <input
                                    value={editName}
                                    onChange={(e) =>
                                        setEditName(e.target.value)
                                    }
                                />
                                <button onClick={()=>{handleSave(user.id)}}>Save</button>
                            </div>
                        ) : (
                            <>
                                <span>{user.name}</span>
                                <button onClick={() => handleDelete(user.id)}>
                                    Delete
                                </button>
                                <button onClick={() => handleEdit(user)}>
                                    Edit
                                </button>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Practice;
