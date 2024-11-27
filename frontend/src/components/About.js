import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./About.css"; // Import custom styles here

// Existing services and team members data
const services = [
  {
    title: "Business Growth",
    description: "Boost your business with strategies to reach new markets.",
    icon: "https://zidio.in/assets/images/home-3/feature-icon-1.png",
  },
  {
    title: "eCommerce",
    description:
      "Enhance your experience with user-friendly eCommerce solutions.",
    icon: "https://zidio.in/assets/images/home-3/feature-icon-2.png",
  },
  {
    title: "Secure Database",
    description:
      "Safeguard your data with robust security measures to prevent risks.",
    icon: "https://zidio.in/assets/images/home-3/feature-icon-3.png",
  },
  {
    title: "Audience Growth",
    description: "Expand your reach by connecting with the right audience.",
    icon: "https://zidio.in/assets/images/home-3/feature-icon-4.png",
  },
];

const teamMembers = [
  {
    name: "Haros Dash",
    role: "Developer Team Lead",
    image: "https://zidio.in/assets/images/team/harash.jpg",
  },
  {
    name: "Pitabas Pradhan",
    role: "HR Manager",
    image: "https://zidio.in/assets/images/team/final-pitabas.jpg",
  },
  {
    name: "Chandan Mishra",
    role: "Data Scientist",
    image: "https://zidio.in/assets/images/team/chandan.jpeg",
  },
  {
    name: "S. H. Salsabila",
    role: "UI Designer",
    image: "https://zidio.in/assets/images/team/salama.JPG",
  },
];

// Stats and Testimonials data
const stats = [
  { title: "HAPPY CUSTOMERS", value: 1000 },
  { title: "WORKS COMPLETED", value: 1200 },
  { title: "EXPERT MEMBERS", value: 99 },
  { title: "SATISFACTION RATES", value: 100, suffix: "%" },
];

const testimonials = [
  {
    name: "John D. Alexon",
    role: "UI Designer",
    image:
      "https://zidio.in/assets/images/home-2/SaveInsta.App_452075928_18239507287281300_4779034483683661459_n.jpg",
    feedback: "Completely extend leveraged customer service...",
  },
  {
    name: "Sokina Bibi",
    role: "Marketing Manager",
    image: "https://zidio.in/assets/images/home-2/pintu.jpeg",
    feedback: "Efficient and timely service with amazing customer support...",
  },
  {
    name: "Tomar Amar Nana",
    role: "Web Developer",
    image: "https://zidio.in/assets/images/home-2/JnZPX-PG_400x400.jpg",
    feedback:
      "Incredible solutions that have boosted my business exponentially.",
  },
  {
    name: "Tomar Amar Nani",
    role: "UI Designer",
    image: "https://zidio.in/assets/images/home-2/Dave_s_Music_400x400.jpg",
    feedback:
      "Incredible solutions that have boosted my business exponentially.",
  },
];

const About = () => {
  return (
    <div className="about-container">
      {/* About Us Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="font-bold mb-8"
      >
<Typography
          variant="h2"
          align="center"
          className="font-bold mb-8"
          sx={{
            paddingTop: '40px',
            paddingBottom: '0px',
            letterSpacing: '0.1em',
            color: 'black',
            fontSize: '3rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            position: 'relative',
          }}
        >
          About <span style={{ color: '#3f51b5' }}>Us</span>
        </Typography>
      </motion.div>

      {/* Service Cards Section */}
      <Box className="service-cards-section">
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card className="service-card">
                  <CardContent>
                    {/* Ensure the icon is displayed correctly */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="service-icon"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <Typography variant="h6" className="service-title">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" className="service-description">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* About Us Section */}
      <Box
        className="about-us-section"
        sx={{ padding: { xs: 4, md: 8 }, backgroundColor: "#f7f9fc" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about-content"
        >
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="h3"
                  className="about-title"
                  sx={{ marginBottom: 2, fontWeight: 700 }}
                >
                  Who We Are & What We Do
                </Typography>
                <Typography
                  variant="body1"
                  className="about-description"
                  sx={{ marginBottom: 4, lineHeight: 1.7 }}
                >
                  Welcome to our development agency. We specialize in turning
                  complex ideas into user-friendly applications. Our mission is
                  to support businesses in the rapidly changing digital
                  landscape with reliable solutions.
                </Typography>
                <Typography
                  variant="body2"
                  className="about-features"
                  sx={{ marginBottom: 4, fontSize: "1.1rem", color: "#6f7285" }}
                >
                  <ul>
                    <li>1000+ Completed Projects</li>
                    <li>100% Business Solution Level</li>
                  </ul>
                </Typography>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button
                    variant="contained"
                    className="learn-more-btn"
                    sx={{
                      padding: "12px 24px",
                      fontSize: "1rem",
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#115293" },
                    }}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={6} className="about-image-container">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div
                  className="about-image-wrapper"
                  style={{ position: "relative" }}
                >
                  <img
                    src="https://zidio.in/assets/images/about-inner/about-thumb.png"
                    alt="About Us"
                    className="about-thumbnail-large"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "20px",
                      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  {/* Hover Effect */}
                  <div
                    className="image-overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(135deg, rgba(25,118,210,0.2), rgba(25,118,210,0.6))",
                      borderRadius: "20px",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    }}
                  />
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          sx={{ textAlign: "center", marginTop: 8 }}
        >
          <Box
            sx={{
              display: "inline-block",
              padding: 2,
              backgroundColor: "#fff",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 600 }}>
              Award Winning
            </Typography>
            <Typography variant="body2" sx={{ color: "#6f7285" }}>
              Best Services
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Dedicated Team Section */}
      <Box className="team-section" style={{ background: "#e6f2ff" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h4"
            className="team-title"
            style={{
              borderBottom: "2px solid #1976d2",
              padding: "10px",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <span
              style={{
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -4,
                  width: "100%",
                  height: 4,
                  backgroundColor: "#1976d2",
                  transition: "all 0.3s ease-in-out",
                },
                "&:hover:after": {
                  width: "80%",
                },
              }}
            >
              Meet Our Dedicated Team Members
            </span>
          </Typography>
        </motion.div>
        <Grid container spacing={3}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="team-card">
                  <CardContent>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      className="team-avatar"
                      sx={{ width: 100, height: 100, margin: "0 auto" }}
                    />
                    <Typography variant="h6" className="team-name">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" className="team-role">
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Stats Section */}
      <Box className="stats-section py-16 bg-gray-100">
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <Box textAlign="center" className="stat-box">
                  <Typography
                    variant="h3"
                    className="font-bold text-blue-600"
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      display: "inline-block",
                      fontFamily: "var(--bs-body-font-family)",
                    }}
                  >
                    <CountUp
                      end={stat.value}
                      suffix={index < 3 ? "+" : stat.suffix || ""}
                      duration={3}
                    />
                  </Typography>
                  <Typography
                    variant="h6"
                    className="font-medium text-gray-600"
                  >
                    {stat.title}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Testimonial Section */}
      <Box className="testimonial-section text-center py-16 bg-gradient-to-b from-blue-50 to-blue-100">
        <Typography variant="h4" className="mb-12 font-bold text-blue-800">
          Customer’s Awesome Feedback About Our Services
        </Typography>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          navigation={{ clickable: true }} // Ensure navigation is clickable
          pagination={{ clickable: true }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="testimonial-card bg-white p-8 shadow-xl rounded-xl mx-auto max-w-md"
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar mb-6"
                  sx={{
                    width: 90,
                    height: 90,
                    margin: "0 auto",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                  }}
                />
                <Typography
                  variant="h6"
                  className="font-semibold text-blue-600 mb-1"
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="italic mb-4"
                >
                  {testimonial.role}
                </Typography>
                <Typography
                  variant="body1"
                  className="testimonial-feedback text-gray-700"
                >
                  "{testimonial.feedback}"
                </Typography>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default About;
