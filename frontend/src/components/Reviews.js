import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Rating, CircularProgress } from '@mui/material';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Reviews.css'; // Custom CSS for enhanced styles

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, []);

  if (reviews.length === 0) {
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
    <div className="reviews-section py-16 bg-gray-100">
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
          Client <span style={{ color: '#3f51b5' }}>Testimonials</span>
          {/* <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
            className="underline-line"
            style={{
              background: '#3f51b5',
              height: '4px',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
            }}
          /> */}
        </Typography>
      </motion.div>

      {/* Reviews Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4} justifyContent="center">
          {reviews.map(review => (
            <Grid item xs={12} sm={6} md={4} key={review._id}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="review-card"
                  style={{
                    background: '#fff',
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent>
                    {/* Client Name and Project */}
                    <Typography variant="h6" className="font-bold"
                      style={{
                        fontSize: '1.25rem',
                        color: '#3f51b5',
                        marginBottom: '10px',
                        textAlign: 'center',
                      }}
                    >
                      {review.clientName} - {review.project}
                    </Typography>

                    {/* Rating */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                      <Rating value={review.rating} readOnly />
                    </div>
                    {/* Feedback */}
                    <Typography variant="body1" className="feedback"
                      style={{
                        color: '#666',
                        textAlign: 'center',
                      }}
                    >
                      {review.feedback}
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

export default Reviews;
