import React from "react";
import NavBar from "../../components/NavBar";
// import image from "../../assets/heroImage.jpg"; // Ensure the path is correct

function Home() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url('/heroImage.jpg')` }}>
      <NavBar />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
        <h3 className="text-lg md:text-2xl font-light">All-in-One Internship Application Portal</h3>
        <h1 className="text-2xl md:text-5xl font-bold my-4">
          Apply for an Internship in Just a Few Clicks
        </h1>
        <p className="text-sm md:text-lg max-w-2xl">
          Easily track your applications, receive real-time updates, and land the internship of your dreams.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Home;
