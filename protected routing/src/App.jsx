import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [authData, setAuthData] = useState({ name: '', pin: '' });

  return (
    <Router>
      <nav>
        <Link to="/">Create Account</Link> | 
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CreateAccount setAuthData={setAuthData} />} />
        <Route path="/login" element={<Login authData={authData} />} />
        <Route path="/dashboard" element={
          <ProtectedRoute authData={authData}>
            <Dashboard authData={authData} />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
