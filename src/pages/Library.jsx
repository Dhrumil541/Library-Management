// src/pages/Library.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Library = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-700 to-blue-900 text-white">
            <h1 className="text-4xl font-bold mb-6">Welcome to the Library</h1>
            <div className="space-x-4">
                <Link to="/login">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Login
                    </button>
                </Link>
                <Link to="/register">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Library;
