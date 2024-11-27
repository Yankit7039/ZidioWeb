import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TeamIcon from '@mui/icons-material/Group';
import MilestonesIcon from '@mui/icons-material/Timeline';
import ReviewsIcon from '@mui/icons-material/RateReview';
import JobsIcon from '@mui/icons-material/Work';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';

const Home = () => {
  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const testimonials = [
    {
      name: "John Doe",
      feedback: "Zidio Development transformed our business with their innovative solutions.",
    },
    {
      name: "Jane Smith",
      feedback: "Exceptional service and support throughout our project.",
    },
    {
      name: "Mike Johnson",
      feedback: "Their expertise in technology is unparalleled.",
    },
  ];

  return (
    <div>
      {/* Hero Section with Typewriter Animation */}
      <motion.div
        className="relative bg-cover bg-center text-white mt-10"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)', minHeight: '60vh' }}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3f51b5] to-transparent opacity-80"></div>
        <Container sx={{ paddingTop: '80px' }} className="relative z-10 flex flex-col items-center justify-center h-full">
          <motion.h1
            className="text-6xl font-extrabold mb-6 text-center leading-tight"
            variants={textVariants}
            custom={0}
            style={{ fontFamily: "'Poppins', sans-serif" }} // Custom font style
          >
            <Typewriter
              words={['Welcome to Zidio Development']}
              loop={false}  // Disabled looping
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
            />
          </motion.h1>
          <motion.p
            className="text-xl mb-6 text-center text-white"
            variants={textVariants}
            custom={1}
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Innovation. Excellence. Impact.
          </motion.p>
          <motion.div variants={textVariants} custom={2}>
            <Button
              variant="contained"
              className="bg-[#3f51b5] hover:bg-[#3f51b5] text-lg shadow-lg"
              size="large"
              component={Link}
              to="/jobs"
              sx={{ backgroundColor: '#3f51b5' }}
            >
              Join Us
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      {/* Services Section */}
      <Container className="py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <Typography
            variant="h4"
            className="text-center text-4xl font-bold mb-20 underline-heading"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            What We Offer
          </Typography>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 px-6">
          {[
            { icon: <TeamIcon />, title: "Our Team", description: "Meet our talented professionals.", link: "/team" },
            { icon: <MilestonesIcon />, title: "Milestones", description: "See our journey and key achievements.", link: "/milestones" },
            { icon: <ReviewsIcon />, title: "Reviews", description: "Read client testimonials and their experience.", link: "/reviews" },
            { icon: <JobsIcon />, title: "Careers", description: "Join our growing and vast team.", link: "/jobs" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white shadow-2xl rounded-lg p-10 cursor-pointer hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex justify-center">
                {React.cloneElement(item.icon, { className: "text-[#3f51b5]", style: { fontSize: 80 } })}
              </div>
              <Typography variant="h5" className="text-center mt-6 font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {item.title}
              </Typography>
              <Typography variant="body2" className="text-center mt-3 text-gray-600" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {item.description}
              </Typography>
              <div className="mt-6">
                <Button
                  variant="contained"
                  fullWidth
                  component={Link}
                  to={item.link}
                  className="bg-[#3f51b5] hover:bg-[#3f51b5] text-white"
                  sx={{ backgroundColor: '#3f51b5' }}
                >
                  Explore
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-24">
        <Typography
          variant="h4"
          className="text-center text-4xl font-bold mb-12 underline-heading"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          What Our Clients Say
        </Typography>
        <div className="container mx-auto px-6">
          <motion.div
            className="flex space-x-8 overflow-x-scroll pb-6"
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[320px] bg-white shadow-xl rounded-lg p-8"
                whileHover={{ scale: 1.05 }}
              >
                <Typography variant="body1" className="italic text-gray-700 mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  "{testimonial.feedback}"
                </Typography>
                <Typography variant="subtitle1" className="text-gray-900 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  - {testimonial.name}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

