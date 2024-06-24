import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetDetails from './components/petDetails';
import PetList from './components/petList';
import { Container, Typography } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <Router>
      <Container>
        <header className="app-header">
          <Typography variant="h2" className="app-title">
            Pet Viewer
          </Typography>
        </header>
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/pet-details/:petName" element={<PetDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
