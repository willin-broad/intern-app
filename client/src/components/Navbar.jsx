import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center relative">
      {/* Logo on the Left */}
      <div className="text-gray-800 font-bold text-xl">
        Intern-App <span className="text-blue-600">(logo)</span>
      </div>

      {/* Navigation Menu Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex items-center gap-x-8 text-lg font-medium">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/CheckStatus" className="text-gray-700 hover:text-blue-600 transition">
              Check Status
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
