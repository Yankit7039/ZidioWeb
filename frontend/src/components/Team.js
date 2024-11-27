import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Team.css'; // Ensure your CSS file contains custom styles

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/team')
      .then(res => setTeam(res.data))
      .catch(err => console.error(err));
  }, []);

  if (team.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  // Animation settings for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card animation
      },
    },
  };

  return (
    <div className="team-section" style={{ backgroundImage: 'url(/images/hero-bg.jpg)', minHeight: '80vh', backgroundSize: 'cover' }}>
      {/* Enhanced Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="font-bold mb-12"
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            paddingTop: '20px',
            letterSpacing: '0.1em',
            color: 'black',
            fontSize: '3rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            position: 'relative',
          }}
        >
          Meet Our <span className="highlight">Team</span>
        </Typography>
      </motion.div>

      {/* Grid Container with Staggered Animations */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {team.map((member) => (
          <motion.div
            key={member._id}
            variants={cardVariants}
            whileHover="hover"
            className="team-card"
            style={{
              backgroundColor: '#fff',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <motion.div
                className="avatar-wrapper"
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: '140px',
                  height: '140px',
                  border: '4px solid #ddd',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  transform: 'scale(1)',
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  style={{ borderRadius: '50%' }}
                />
              </motion.div>
            </Box>

            <Typography
              variant="h6"
              component="h3"
              className="text-2xl font-semibold member-name"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#333' }}
            >
              {member.name.split(' ')[0]}{' '}
              <span className="highlight" style={{ color: '#3f51b5' }}>
                {member.name.split(' ')[1]}
              </span>
            </Typography>
            <Typography
              variant="body2"
              className="member-role"
              style={{
                color: '#777',
                marginTop: '8px',
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              {member.role}
            </Typography>
            <Typography
              variant="body1"
              className="member-expertise"
              style={{
                color: '#555',
                marginTop: '10px',
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              {member.expertise}
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
