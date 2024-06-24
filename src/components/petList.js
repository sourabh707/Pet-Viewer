import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, MenuItem, Button, Grid } from '@mui/material';
import { fetchPets } from '../services/petService';

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getPets = async () => {
      const petData = await fetchPets();
      if (petData && Array.isArray(petData)) {
        setPets(petData);
      }
    };
    getPets();
  }, []);

  const handleChange = (event) => {
    setSelectedPet(event.target.value);
  };

  const handleViewDetails = () => {
    if (selectedPet) {
      navigate(`/pet-details/${selectedPet}`);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item>
        <Select
          value={selectedPet}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select a pet' }}
        >
          <MenuItem value="" disabled>
            Select a pet
          </MenuItem>
          {Array.isArray(pets) && pets.map((pet, index) => (
            <MenuItem key={index} value={pet.name}>
              {pet.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleViewDetails} disabled={!selectedPet}>
          View Details
        </Button>
      </Grid>
    </Grid>
  );
};

export default PetList;
