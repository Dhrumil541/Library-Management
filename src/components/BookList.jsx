// src/components/BookList.jsx
import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, filters, searchQuery }) => {
    const filteredBooks = books.filter(book => {
        const matchesGenre = filters.genre ? book.genre === filters.genre : true;
        const matchesAuthor = filters.author ? book.author === filters.author : true;
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesGenre && matchesAuthor && matchesSearch;
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBooks.length > 0 ? (
                filteredBooks.map(book => <BookItem key={book.id} book={book} />)
            ) : (
                <p>No books available.</p>
            )}
        </div>
    );
};

export default BookList;
