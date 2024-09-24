// src/pages/BookDetailsPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import booksData from '../data'; // import your book data

const BookDetailsPage = () => {
    const { id } = useParams(); // get the bookId from the URL parameters
    const book = booksData.find((b) => b.id === parseInt(id)); // find the book by ID
    const navigate = useNavigate();

    if (!book) {
        return <div className="p-4"><h1 className="text-xl">Book not found.</h1></div>; // handle case where book doesn't exist
    }

    const handleReturnClick = () => {
        navigate('/'); // navigate back to the homepage
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <img src={book.image} alt={book.title} className="mt-4 mb-4 w-1/2 h-auto" /> {/* display book image */}
            <p className="text-lg">Author: {book.author}</p>
            <p className="text-lg">Genre: {book.genre}</p>
            <p className="text-lg">Publication Date: {book.publicationDate}</p>
            <p className="text-lg">Description: {book.description}</p> {/* assuming you have a description field */}

            <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Borrow Book
                </button>
                <button 
                    className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={handleReturnClick} 
                >
                    Return Book
                </button>
            </div>
        </div>
    );
};

export default BookDetailsPage;
