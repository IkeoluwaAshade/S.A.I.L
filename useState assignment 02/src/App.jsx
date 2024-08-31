import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserInput from './component/UserInput';
import LandingPage from './component/LandingPage';
import WebLayout from './component/WebLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebLayout><UserInput /></WebLayout>} />
        <Route path="/welcome" element={<WebLayout><LandingPage /></WebLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
