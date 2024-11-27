// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importing Framer Motion for animations
// import './NavBar.css'; // Add any custom CSS here if needed

const NavBar = () => {
  return (
    <motion.div
      className="bg-white/30 backdrop-blur-lg fixed top-0 left-0 w-full z-50 shadow-md"
      initial={{ y: -100 }} // Animation starts with the navbar out of view
      animate={{ y: 0 }} // Slides into view smoothly
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <motion.h1
          className="text-2xl font-bold text-[#3f51b5]"
          whileHover={{ scale: 1.1 }} // Slight scaling when hovered over
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <img src="https://zidio.in/assets/images/home-1/zidio%20(1).png" alt="Zidio Development" style={{ width: '120px' }} />
        </motion.h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium text-gray-700">
          <motion.li
            whileHover={{ scale: 1.1, color: '#1E3A8A' }} // Interactive hover effects
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/" className="hover:text-[#3f51b5] transition-colors duration-300">
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#1E3A8A' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/team" className="hover:text-[#3f51b5] transition-colors duration-300">
              Team
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#1E3A8A' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/milestones" className="hover:text-[#3f51b5] transition-colors duration-300">
              Milestones
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#1E3A8A' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/about" className="hover:text-[#3f51b5] transition-colors duration-300">
              About
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#1E3A8A' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/reviews" className="hover:text-[#3f51b5] transition-colors duration-300">
              Reviews
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#1E3A8A' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/jobs" className="hover:text-[#3f51b5] transition-colors duration-300">
              Careers
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#1E3A8A' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/services" className="hover:text-[#3f51b5] transition-colors duration-300">
              Services
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#1E3A8A' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/contact" className="hover:text-[#3f51b5] transition-colors duration-300">
              Contact
            </Link>
          </motion.li>
        </ul>

        {/* Call to Action Button */}
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }}>
          <Link
            to="/jobs"
            className="bg-[#3f51b5] hover:bg-[#3f51b5] text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform duration-300"
          >
            Join Us
          </Link>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default NavBar;

