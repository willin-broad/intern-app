import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound";
import CheckStatus from "./pages/CheckStatus/CheckStatus";
import PersonalInfo from "./components/forms/PersonalInfo";
import EduBackground from "./components/forms/EduBackground";
import WorkExperience from "./components/forms/WorkExperience";
import Uploads from "./components/forms/Uploads";
import Apply from './pages/Apply/Apply';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CheckStatus" element={<CheckStatus />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/EduBackground" element={<EduBackground />} />
        <Route path="/WorkExperience" element={<WorkExperience />} />
        <Route path="/Uploads" element={<Uploads />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
