import React, { useState } from "react";

const MultipalInput = () => {
    const [form, setForm] = useState({ name: "", email: "" });
    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        setForm({
            name:'',
            email: ''
        })
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default MultipalInput;
