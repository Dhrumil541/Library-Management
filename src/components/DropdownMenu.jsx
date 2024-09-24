// src/components/DropdownMenu.jsx
import React, { useEffect, useRef, useState } from 'react';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // reference for the dropdown

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleMenuItemClick = (menuItem) => {
        console.log(`${menuItem} clicked`); // replace with your navigation or action
        setIsOpen(false); // Close dropdown after selecting an item
    };

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                    Browse
                </button>
            </div>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {['Subjects', 'Trending', 'Library Explorer', 'Lists', 'Collections', 'K-12 Student Library', 'Book Talks', 'Random Book', 'Advanced Search'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleMenuItemClick(item)}
                                className="block px-4 py-2 text-sm  hover:bg-gray-200 hover:text-black w-full text-left transition duration-150 ease-in-out"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
