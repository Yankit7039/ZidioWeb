import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import './Services.css'; // Assuming you'll have a CSS file for custom styles

// Service data
const services = [
  { title: "Cloud Services", description: "Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.", icon: "https://zidio.in/assets/images/service-inner/service-icon-1.png" },
  { title: "IT Management", description: "Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations.", icon: "https://zidio.in/assets/images/service-inner/service-icon-2.png" },
  { title: "Software Renew", description: "Manage and streamline software renewals, ensuring your systems are always up-to-date and secure.", icon: "https://zidio.in/assets/images/service-inner/service-icon-3.png" },
  { title: "Machine Learning", description: "Develop and implement machine learning models to automate processes and drive intelligent decision-making.", icon: "https://zidio.in/assets/images/service-inner/service-icon-4.png" },
  { title: "Digital Marketing", description: "Boost your online presence with tailored digital marketing strategies that drive engagement and growth.", icon: "https://zidio.in/assets/images/service-inner/service-icon-5.png" },
  { title: "Web Development", description: "Design and build responsive, high-performance websites using the latest web technologies.", icon: "https://zidio.in/assets/images/service-inner/service-icon-6.png" },
  { title: "Cyber Security", description: "Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats.", icon: "https://zidio.in/assets/images/service-inner/service-icon-7.png" },
  { title: "Data Analytics", description: "Transform raw data into valuable insights, enabling informed and strategic business decisions.", icon: "https://zidio.in/assets/images/service-inner/service-icon-8.png" },
];

// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: '0px 15px 30px rgba(0,0,0,0.2)', transition: { duration: 0.3, ease: "easeInOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Services = () => {
  return (
    <div className="services-container" style={{ backgroundColor: '#f5f7fa', padding: '40px 0' }}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
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
          Our <span style={{ color: '#3f51b5' }}>Services</span>
          {/* Line animation under heading */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 1 }}
            className="heading-underline"
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

      {/* Animated Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid-container"
      >
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={cardVariants} whileHover="hover">
                <Card
                  className="service-card"
                  style={{
                    padding: '20px',
                    background: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent>
                    {/* Icon */}
                    <div className="icon-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                      <img src={service.icon} alt={service.title} className="service-icon" style={{ width: '60px', height: '60px' }} />
                    </div>
                    {/* Title */}
                    <Typography
                      variant="h5"
                      className="service-title"
                      style={{
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        color: '#3f51b5',
                        marginBottom: '10px',
                      }}
                    >
                      {service.title}
                    </Typography>
                    {/* Description */}
                    <Typography
                      variant="body1"
                      className="service-description"
                      style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}
                    >
                      {service.description}
                    </Typography>
                    {/* Button */}
                    <Button
                      variant="contained"
                      className="learn-more-btn"
                      style={{
                        background: '#3f51b5',
                        color: '#fff',
                        display: 'block',
                        margin: '0 auto',
                        borderRadius: '20px',
                        textTransform: 'none',
                        padding: '10px 20px',
                        transition: 'background 0.3s ease',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.background = '#2e3b8e')}
                      onMouseOut={(e) => (e.currentTarget.style.background = '#3f51b5')}
                    >
                      Learn More
                    </Button>
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

export default Services;

