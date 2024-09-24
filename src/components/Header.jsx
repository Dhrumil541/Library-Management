import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference for the dropdown

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const handleMenuItemClick = (menuItem) => {
        console.log(`${menuItem} clicked`); // replace with your navigation or action
        setIsDropdownOpen(false); // close dropdown after selecting an item
    };

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-gradient-to-r from-purple-700 to-blue-900 text-white p-4 flex justify-between items-center">
            <h1 className="text-5xl font-extrabold text-center mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                    Open
                </span>
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                    Library
                </span>
            </h1>
            <nav>
                <ul className="flex space-x-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-lg shadow-lg relative">
                    <li>
                        <Link to="/homepage" className="hover:underline text-white font-semibold hover:text-yellow-300 transition-colors duration-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/my-books" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300">My Books</Link>
                    </li>
                    <li className="relative">
                        <button 
                            onClick={toggleDropdown} 
                            className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300"
                        >
                            Browse
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute left-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white mt-2 rounded-md shadow-lg z-10" ref={dropdownRef}>
                                {['Subjects', 'Trending', 'Library Explorer', 'Lists', 'Collections', 'K-12 Student Library', 'Book Talks', 'Random Book', 'Advanced Search'].map((item) => (
                                    <li key={item}>
                                        <button
                                            onClick={() => handleMenuItemClick(item)}
                                            className="block px-4 py-2 hover:bg-purple-500 transition-colors duration-300 w-full text-left"
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/login" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300">Register</Link>
                    </li>
                    <li>
                        <Link to="/add-book" className="hover:underline text-white font-semibold hover:text-yellow-300 transition-colors duration-300">Add New Book</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
