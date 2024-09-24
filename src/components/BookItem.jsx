// src/components/BookItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
    return (
        <div className="book-item border p-4 rounded shadow">
            <Link to={`/books/${book.id}`}>
                <img src={book.image} alt={book.title} className="w-full h-48 object-cover mb-2" />
                <h2 className="font-semibold text-lg">{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <p>Publication Date: {book.publicationDate}</p>
            </Link>
        </div>
    );
};

export default BookItem;
