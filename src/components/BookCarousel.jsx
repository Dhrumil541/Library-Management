import React from 'react';
import BookItem from './BookItem';

const BookCarousel = ({ title, books }) => {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="flex overflow-x-scroll space-x-4">
                {books.map((book) => (
                    <BookItem key={book.id} book={book} />
                ))}
            </div>
        </section>
    );
};

export default BookCarousel;
