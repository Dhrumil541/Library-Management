// src/components/FilterBar.jsx
import React from 'react';

const FilterBar = ({ genres, authors, onFilterChange }) => {
    return (
        <div className="filter-bar">
            <select onChange={(e) => onFilterChange('genre', e.target.value)}>
                <option value="">All Genres</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))}
            </select>
            <select onChange={(e) => onFilterChange('author', e.target.value)}>
                <option value="">All Authors</option>
                {authors.map((author, index) => (
                    <option key={index} value={author}>{author}</option>
                ))}
            </select>
        </div>
    );
};

export default FilterBar;
