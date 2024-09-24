// src/pages/BookDetailsPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import booksData from '../data'; // import the static book data

const BookDetailsPage = () => {
    const { id } = useParams(); // get the book id from the url
    const book = booksData.find((book) => book.id === parseInt(id)); // find the book by id

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
            <Link to="/my-books" className="text-blue-500 hover:underline mb-4 block">← Back to My Books</Link>
            <div className="flex">
                {/* Book image */}
                <div className="w-1/3">
                    <img src={book.image} alt={book.title} className="w-full h-auto rounded shadow" />
                </div>
                {/* Book details */}
                <div className="w-2/3 pl-6">
                    <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
                    <h2 className="text-xl text-gray-700 mb-2">Author: {book.author}</h2>
                    <h3 className="text-lg text-gray-600 mb-2">Genre: {book.genre}</h3>
                    <h4 className="text-md text-gray-500 mb-4">Published on: {book.publicationDate}</h4>
                    <p className="text-gray-800 leading-relaxed">{book.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;
