import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyBooksPage from './pages/MyBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import AddEditBookPage from './pages/AddEditBookPage'; 
import Header from './components/Header'; 
import Library from './pages/Library'; // Import the Library page

const AppContent = () => {
    const location = useLocation(); // Get the current location

    return (
        <div className="flex flex-col min-h-screen">
            {/* Render Header only if not on Library page */}
            {location.pathname !== '/' && <Header />}
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Library />} /> {/* Route for the Library page */}
                    <Route path="/my-books" element={<MyBooksPage />} />
                    <Route path="/books/:id" element={<BookDetailsPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/homepage" element={<HomePage />} /> 
                    <Route path="/register" element={<Register />} /> 
                    <Route path="/add-book" element={<AddEditBookPage />} /> {/* Route for adding new book */}
                    <Route path="/edit-book/:id" element={<AddEditBookPage />} /> {/* Route for editing book */}
                </Routes>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent /> {/* Use a separate component for the app content */}
        </Router>
    );
};

export default App;
