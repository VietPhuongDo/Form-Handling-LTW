import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './FormComponent/Form';
import MyForm from './MyFormComponent/MyForm';
import Uncontrolled from './UncontrolledCOmponent/Uncontrolled';
import LoginForm from './LoginFormComponent/LoginForm'; // Import LoginForm
import './App.css';

export default function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/myform">My Form</Link></li>
                    <li><Link to="/uncontrolled">Uncontrolled</Link></li>
                    <li><Link to="/login">Login</Link></li> {/* Add Login Link */}
                </ul>
            </nav>

            <Routes>
                <Route path="/form" element={<Form />} />
                <Route path="/myform" element={<MyForm />} />
                <Route path="/uncontrolled" element={<Uncontrolled />} />
                <Route path="/login" element={<LoginForm />} /> {/* Add LoginForm route */}
            </Routes>
        </Router>
    );
}
