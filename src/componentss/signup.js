import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [user, setUser] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        profession: ''
    });

    const professions = ["Engineer", "Doctor", "Artist", "Other"];

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (!user.name) {
            toast.error("Name field is required");
            return false;
        }
        if (!user.email) {
            toast.error("Email field is required");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(user.email)) {
            toast.error("Please enter a valid Email address");
            return false;
        }
        if (!user.email.includes('@')) {
            toast.error("Email should contain @ symbol");
            return false;
        }
        if (!user.password) {
            toast.error("Password field is required");
            return false;
        }
        if (user.password.length <= 5) {
            toast.error("Password length should be greater than five");
            return false;
        }
        if (!user.phone) {
            toast.error("Phone field is required");
            return false;
        }
        if (!/^\d{10}$/.test(user.phone)) {
            toast.error("Phone number should contain exactly ten digits");
            return false;
        }
        if (!user.profession) {
            toast.error("Profession field is required");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.setItem('user', JSON.stringify(user));
            toast.success("Signup successful!");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <h2>Register</h2>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
                <select name="profession" onChange={handleChange} required>
                    <option value="">Select Profession</option>
                    {professions.map((profession, index) => (
                        <option key={index} value={profession}>{profession}</option>
                    ))}
                </select>
                <button type="submit">Sign Up</button>
                <div>
                    Already Have an Account?
                    <span>
                        <Link to="/login"> <span style={{color:"blue"}}> Login</span></Link>
                    </span>
                </div>
            </form>
            <ToastContainer />
        </>
    );
};

export default Signup;
