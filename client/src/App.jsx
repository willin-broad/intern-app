import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound";
import CheckStatus from "./pages/CheckStatus/CheckStatus";
import Apply from './pages/Apply/Apply';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CheckStatus" element={<CheckStatus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
