import React, { useState } from "react";

const CRUD = () => {

  // MAIN DATA
  const [users, setUsers] = useState([
    { id: 1, name: "Khalid" },
    { id: 2, name: "Phool" },
  ]);

  // CREATE INPUT
  const [name, setName] = useState("");

  // UPDATE STATES
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // ======================
  // CREATE
  // ======================
  const handleAdd = () => {
    if (!name.trim()) return;

    const newUser = {
      id: Date.now(),
      name: name,
    };

    setUsers([...users, newUser]);
    setName("");
  };

  // ======================
  // DELETE
  // ======================
  const handleDelete = (id) => {
    const filtered = users.filter((u) => u.id !== id);
    setUsers(filtered);
  };

  // ======================
  // START EDIT
  // ======================
  const handleEdit = (user) => {
    setEditId(user.id);
    setEditName(user.name);
  };

  // ======================
  // UPDATE
  // ======================
  const handleUpdate = (id) => {
    const updated = users.map((u) =>
      u.id === id ? { ...u, name: editName } : u
    );

    setUsers(updated);
    setEditId(null);
    setEditName("");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>🔥 Full CRUD</h2>

      {/* CREATE */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add user..."
      />
      <button onClick={handleAdd}>Add</button>

      <hr />

      {/* READ + UPDATE + DELETE */}
      {users.map((user) => (
        <div key={user.id}>

          {editId === user.id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <button onClick={() => handleUpdate(user.id)}>
                Save
              </button>
            </>
          ) : (
            <span>{user.name}</span>
          )}

          <button onClick={() => handleEdit(user)}>
            Edit
          </button>

          <button onClick={() => handleDelete(user.id)}>
            Delete
          </button>

        </div>
      ))}
    </div>
  );
};

export default CRUD;