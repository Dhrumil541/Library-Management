// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-300">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 mb-6">
                    Create Your Account
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
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700 font-semibold">Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 mt-4 w-full rounded shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account? 
                    <a href="/login" className="text-blue-600 hover:underline"> Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
