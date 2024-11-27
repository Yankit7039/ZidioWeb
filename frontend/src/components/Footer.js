import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  // Footer animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  // Social icons animation variants (now subtle)
  const iconVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Button hover animation
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.footer
      className="text-gray-300 py-16"
      style={{ backgroundImage: 'url(https://zidio.in/assets/images/home-1/footer-bg.jpg)' }}
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <Box mb={4}>
          <Typography variant="h4" className="font-bold mb-8">
            <img
              src="https://zidio.in/assets/images/home-2/zidio.png"
              alt="Zidio Development Logo"
              style={{ width: '160px' }}
            />
          </Typography>
          <br/>
          <Typography variant="body1" className="mt-6 mb-10 text-gray-400 leading-relaxed">
            At Zidio Development, we specialize in innovative software solutions. Our team is dedicated to delivering high-quality projects, fostering professional growth, and driving technological advancement.
          </Typography>
        </Box>

        {/* Center Column */}
        <Box mb={4}>
          <Typography variant="h5" className="font-bold mb-4 text-[#f6f6f8]"
            sx={{
              letterSpacing: '0.1em',
              position: 'relative',
              fontSize: '2.0rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}
          >
            Company
          </Typography>
          <br/>
          <ul className="space-y-2">
            {['Milestones', 'Team', 'Contact', 'Jobs'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-teal-500 transition duration-300 text-gray-400"
                  whileHover="hover"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </Box>

        {/* Right Column */}
        <Box mb={4}>
          <Typography variant="h5" className="font-bold mb-4 text-[#f7f6f8]"
            sx={{
              letterSpacing: '0.1em',
              position: 'relative',
              fontSize: '2.0rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}
          >
            Newsletter
          </Typography>
          <br/>
          <Typography variant="body2" className="mb-4 text-gray-400" style={{ paddingBottom: '10px' }}>
            Subscribe to our latest newsletter.
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter Your E-Mail"
            fullWidth
            className="mb-4"
            InputProps={{ 
              style: {
                background: 'transparent',
                border: '1px solid #ffffff52',
                padding: '0 15px',
                height: '60px',
                width: '100%',
                color: '#fff',
                borderRadius: '3px',
                outline: 0
              }
            }}
          />
          <motion.div variants={buttonVariants} whileHover="hover" style={{paddingTop: '10px', display: 'flex', justifyContent: 'center'}}>
            <Button variant="contained" sx={{ 
              backgroundColor: 'blue', 
              borderRadius: '5%', 
              padding: '10px 25px', 
              fontSize: '1.2rem',
              width: 'fit-content',
            }}>
              Subscribe
            </Button>
          </motion.div>
        </Box>
      </Container>

      {/* Divider */}
      <div className="my-2 border-t border-gray-700"></div>

      <Container className="flex flex-col md:flex-row justify-between items-center">
        <Typography variant="body2" className="text-center md:text-left mb-1 md:mb-0 text-gray-500">
          © {new Date().getFullYear()} Zidio Development. All rights reserved.
        </Typography>

        {/* Social Icons */}
        <Box display="flex" flexWrap="wrap" justifyContent="center" mt={2}>
          {[
            { href: "https://www.facebook.com", icon: "https://img.icons8.com/?size=100&id=118467&format=png", alt: "Facebook" },
            { href: "https://twitter.com", icon: "https://img.icons8.com/?size=100&id=8824&format=png", alt: "Twitter" },
            { href: "https://linkedin.com", icon: "https://img.icons8.com/?size=100&id=8808&format=png", alt: "LinkedIn" },
          ].map((social, index) => (
            <Box key={index} m={0.5}>
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center text-[#f7f6f8] rounded-full shadow-sm hover:shadow-md transition-transform"
                variants={iconVariants}
                whileHover="hover"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-6 h-6"
                />
              </motion.a>
            </Box>
          ))}
        </Box>
      </Container>
    </motion.footer>
  );
};

export default Footer;

