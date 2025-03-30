import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import './Home.css';
import heroImage from '../../assets/heroImage.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="homeContainer" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="navbar-container">
        <NavBar />
      </div>
      
      <div className="overlay">
        <div className="hero-content">
          <h3 className="hero-subtitle">
            All-in-One Internship Application Portal
          </h3>
          <h1 className="hero-title">
            Apply for an Internship in Just a Few Clicks
          </h1>
          <p className="text-lg mb-8">
            Easily track your applications, receive real-time updates, and land the internship of your dreams.
          </p>
          <button 
            onClick={() => navigate("/apply")}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 text-lg"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
