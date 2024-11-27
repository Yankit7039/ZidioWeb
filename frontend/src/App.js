// src/App.js
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './components/Home';
import Team from './components/Team';
import Milestones from './components/Milestones';
import Reviews from './components/Reviews';
import Jobs from './components/Jobs';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ErrorPage from './components/Error';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import About from './components/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Navigation bar will be visible on all pages */}
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/contact" element={<ContactForm />} />
            {/* Optional 404 Not Found route */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
