// src/pages/EditBookPage.jsx
import React from 'react';
import BookForm from '../components/BookForm';

const EditBookPage = () => {
    return (
        <div>
            <BookForm isEdit={true} />
        </div>
    );
};

export default EditBookPage;
