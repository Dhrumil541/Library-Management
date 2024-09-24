import React, { useState } from 'react';

const BookForm = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book ? book.title : '');
    const [author, setAuthor] = useState(book ? book.author : '');
    const [genre, setGenre] = useState(book ? book.genre : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, author, genre });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block p-2 mb-4"
            />
            <label>Author</label>
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="block p-2 mb-4"
            />
            <label>Genre</label>
            <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="block p-2 mb-4"
            />
            <button type="submit" className="bg-blue-500 p-2 rounded text-white">
                Submit
            </button>
        </form>
    );
};

export default BookForm;
