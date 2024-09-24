// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search for books..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="p-2 border rounded w-full"
            />
        </div>
    );
};

export default SearchBar;
