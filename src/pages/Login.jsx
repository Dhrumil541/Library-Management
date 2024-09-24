import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        navigate('/homepage'); 
    };

    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-300">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 mb-6">
                    Welcome Back!
                </h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700 font-semibold">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700 font-semibold">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 mt-4 w-full rounded shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? 
                    <a href="/register" className="text-blue-600 hover:underline"> Register here</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
