import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Jobs.css'; // Custom CSS for enhanced styles

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  if (jobs.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <CircularProgress />
      </div>
    );
  }

  // Animation settings for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0px 15px 30px rgba(0,0,0,0.2)', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Staggered effect between each card
      },
    },
  };

  return (
    <div className="jobs-section py-16 bg-gray-100">
      {/* Section Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
      >
        <Typography
          variant="h2"
          align="center"
          className="font-bold mb-8"
          sx={{
            paddingTop: '40px',
            paddingBottom: '40px',
            letterSpacing: '0.1em',
            color: 'black',
            fontSize: '3rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            position: 'relative',
          }}
        >
          Careers at <span style={{ color: '#3f51b5' }}>Zidio</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 1 }}
            className="underline-line"
            style={{
              background: '#3f51b5',
              height: '4px',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </Typography>
      </motion.div>
      {/* Jobs Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4} justifyContent="center">
          {jobs.map(job => (
            <Grid item xs={12} sm={6} md={4} key={job._id}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="job-card"
                  style={{
                    background: '#fff',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent>
                    {/* Job Title */}
                    <Typography variant="h5" className="job-title"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#3f51b5',
                        marginBottom: '15px',
                        textAlign: 'center',
                      }}
                    >
                      {job.title}
                    </Typography>

                    {/* Job Description */}
                    <Typography variant="body1" className="job-description"
                      style={{
                        color: '#666',
                        marginBottom: '10px',
                        textAlign: 'center',
                      }}
                    >
                      {job.description}
                    </Typography>

                    {/* Job Posted Date */}
                    <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                      Posted on: {new Date(job.postedDate).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </div>
  );
};

export default Jobs;
