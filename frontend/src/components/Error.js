// src/components/Error.js
import React from 'react';
import { Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" color="error" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        Oops! The page you're looking for doesn't exist. Please check the URL or return to the homepage.
      </Typography>
    </div>
  );
};

export default ErrorPage;
