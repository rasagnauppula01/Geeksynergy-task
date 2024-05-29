// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const storedUser = JSON.parse(localStorage.getItem('user'));
        
//         if (storedUser && storedUser.name === name && storedUser.password === password) {
//             navigate('/movies');
//         } else {
//             setError('Invalid Credentials');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             <button type="submit">Login</button>
//             {error && <p>{error}</p>}

//             <div>You don't have an account? <Link to="/signup">Register</Link></div>
//         </form>
//     );
// };

// export default Login;






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        
        if (storedUser && storedUser.name === name && storedUser.password === password) {
            navigate('/movies');
        } else {
            toast.error('Invalid Credentials');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign In</button>

                <div>You don't have an account? <Link to="/"><span style={{color:"blue"}}>Register</span></Link></div>
            </form>
            <ToastContainer />
        </>
    );
};

export default Login;

