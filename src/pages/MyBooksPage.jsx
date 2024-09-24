// src/pages/BookDetailsPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import books from '../data';

const BookDetailsPage = () => {
    const { id } = useParams();
    const book = books.find(book => book.id === parseInt(id));

    const [isBorrowed, setIsBorrowed] = useState(false);

    const handleBorrowReturn = () => {
        setIsBorrowed(prev => !prev);
    };

    if (!book) {
        return <div><h1>Wait Work In Progress</h1></div>;
    }

    return (
        <div className="book-details p-4">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <img src={book.image} alt={book.title} className="w-full h-64 object-cover mb-4" />
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Publication Date:</strong> {book.publicationDate}</p>
            <p><strong>Description:</strong> {book.description || 'No description available.'}</p>
            
            <button 
                onClick={handleBorrowReturn} 
                className={`mt-4 px-4 py-2 rounded ${isBorrowed ? 'bg-red-500' : 'bg-green-500'} text-white`}
            >
                {isBorrowed ? 'Return Book' : 'Borrow Book'}
            </button>
        </div>
    );
};

export default BookDetailsPage;
