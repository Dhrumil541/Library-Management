import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import booksData from '../data'; // Import your static book data

const AddEditBookPage = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the book ID from the URL params if editing
    const isEditing = id !== undefined;

    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        publicationDate: '',
        imageUrl: '',
    });

    useEffect(() => {
        if (isEditing) {
            const existingBook = booksData.find((book) => book.id === parseInt(id));
            if (existingBook) {
                setBook(existingBook);
            }
        }
    }, [isEditing, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(book); // Handle adding or updating the book here
        // Redirect back to the home page or wherever you want after submission
        navigate('/');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-gradient-to-r from-purple-200 to-blue-300">
            <h2 className="text-3xl font-bold text-center mb-4">
                {isEditing ? 'Edit Book' : 'Add New Book'}
            </h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-semibold">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-semibold">Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-semibold">Genre:</label>
                    <input
                        type="text"
                        name="genre"
                        value={book.genre}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-semibold">Publication Date:</label>
                    <input
                        type="date"
                        name="publicationDate"
                        value={book.publicationDate}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full rounded focus:outline-none
                         focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-semibold">Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={book.imageUrl}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 w-full rounded focus:outline-none
                         focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                {/* Image Preview */}
                {book.imageUrl && (
                    <div className="mt-4 mb-4">
                        <label className="block mb-2">Image Preview:</label>
                        <img
                            src={book.imageUrl}
                            alt="Book Preview"
                            className="w-full h-auto rounded"
                        />
                    </div>
                )}

                <button
                    type="submit"
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 
                    mt-4 w-full rounded shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                >
                    {isEditing ? 'Update Book' : 'Add Book'}
                </button>
            </form>
        </div>
    );
};

export default AddEditBookPage;
