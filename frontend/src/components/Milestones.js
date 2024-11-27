import React, { useState, useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import "./Milestones.css"; // Add any custom styling here if needed

const Milestones = () => {
  const [milestones, setMilestones] = useState([]);

  // Fetch milestones from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/milestones")
      .then((res) => setMilestones(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (milestones.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-50 to-indigo-200">
        <CircularProgress />
      </div>
    );
  }

  // Animation settings for Framer Motion
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <div className="py-10 bg-gradient-to-b from-white to-gray-100">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
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
          Our <span style={{color: '#3f51b5'}}>Journey</span>
          {/* Line animation under heading */}
          {/* <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1 }}
            className="heading-underline"
            style={{
              background: "#3f51b5",
              height: "4px",
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          /> */}
        </Typography>
      </motion.div>

      {/* Grid for Image and Timeline */}
      <Grid container spacing={6} className="w-full mx-auto px-4">
        <Grid item xs={12} md={6}>
          {/* Animated Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://zidio.in/assets/images/home-2/about-thumb.png"
              alt="Milestones journey illustration"
              style={{
                width: "100%", // Ensure the image takes full width
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Timeline Container with Staggered Animations */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <Timeline>
              {milestones.map((milestone) => (
                <TimelineItem key={milestone._id}>
                  <TimelineSeparator>
                    <motion.div
                      whileHover={{
                        scale: 1.3,
                        transition: { duration: 0.3 },
                        backgroundColor: "#00bcd4",
                      }}
                    >
                      <TimelineDot
                        color="secondary"
                        sx={{ boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}
                      />
                    </motion.div>
                    <TimelineConnector sx={{ backgroundColor: "#d1d5db" }} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <motion.div
                      variants={itemVariants}
                      className="bg-white p-5 rounded-lg shadow-xl"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#34495e" }}
                      >
                        {milestone.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ marginBottom: "8px", fontStyle: "italic" }}
                      >
                        {new Date(milestone.date).toLocaleDateString()}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#2c3e50" }}>
                        {milestone.description}
                      </Typography>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Milestones;
