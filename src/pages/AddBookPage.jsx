// src/pages/AddBookPage.jsx
import React from 'react';
import BookForm from '../components/BookForm';

const AddBookPage = () => {
    return (
        <div>
            <BookForm isEdit={false} />
        </div>
    );
};

export default AddBookPage;
