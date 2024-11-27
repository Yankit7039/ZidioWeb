// src/components/ContactForm.js
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaRegEdit } from "react-icons/fa";
import "./ContactForm.css"; // You'll add styles here

const ContactForm = () => {
  return (
    <div className="contact-container">
      <motion.div 
        className="contact-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Write to Us Anytime</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Enter E-Mail" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Write Message" required />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="send-btn" 
            type="submit"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <h3>Get in Touch</h3>
        <ul className="contact-list">
          <li>
            <FaPhone className="contact-icon" />
            <p>+918455807965</p>
          </li>
          <li>
            <FaEnvelope className="contact-icon" />
            <p>support@zidio.in</p>
          </li>
          <li>
            <FaRegEdit className="contact-icon" />
            <p>9.00 AM to 5.00 PM (Mon-Sat)</p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ContactForm;