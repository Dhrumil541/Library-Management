// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar'; 
import booksData from '../data'; // Import static data

const HomePage = () => {
    const [books] = useState(booksData); // Use static data
    const [filters, setFilters] = useState({ genre: '', author: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [genres, setGenres] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        // Extract unique genres and authors from static data
        const uniqueGenres = [...new Set(booksData.map(book => book.genre))];
        const uniqueAuthors = [...new Set(booksData.map(book => book.author))];
        setGenres(uniqueGenres);
        setAuthors(uniqueAuthors);
    }, []);

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen text-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Discover Our Collection</h1>
                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 mb-6">
                    <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
                    <FilterBar genres={genres} authors={authors} onFilterChange={handleFilterChange} />
                </div>
                <BookList books={books} filters={filters} searchQuery={searchQuery} />
                <div className="flex justify-center mt-8">
                    <Link
                        to="/add-book"
                        className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-105 transition-transform duration-300"
                    >
                        Add New Book
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
    