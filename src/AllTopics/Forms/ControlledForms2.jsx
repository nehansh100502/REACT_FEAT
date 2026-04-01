import React, { useState } from 'react';
const ControlledForms2 = () => {
    // for multiple value use same state
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted !");
        console.log(formData);

        //to get existing users from localstorage, if users are present parse it else initialize with empty array[] 
        const users = JSON.parse(localStorage.getItem("users")) || []
        console.log(users)

        // create user data with id 
        const userData = {
            // id: Date.now(),
            id: Math.random().toString(36), // generate random id
            ...formData
        }
        //add user data to users array
        users.push(userData)

        // store users array in localstorage after converting into json

        localStorage.setItem(users, JSON.stringify(users))
        // clear input 

        setFormData({ username: '', email: '', password: "" })
    }

    return (
        <div>
            <h1>Learn controlled forms</h1>
            <div>Manage multiple input with single state</div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange} />
                <br />
                <br />
                <input type="text" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                <br />
                <br />
                <input type="text" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
};
export default ControlledForms2;

// square bracket : [] is used to access the value of the object using the key which is stored in the variable
//. dot notation is used to access the value of the object using the key which is not stored in the variable