import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/upload">Upload</Link></li>
            <li><Link to="/results">Results</Link></li>
        </ul>
    </nav>
);

export default Navbar;
