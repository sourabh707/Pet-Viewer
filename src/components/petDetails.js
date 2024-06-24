import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box,IconButton } from '@mui/material'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fetchPets } from '../services/petService';

const PetDetails = () => {
  const { petName } = useParams();
  const [pet, setPet] = React.useState(null);

  React.useEffect(() => {
    const getPetDetails = async () => {
      const pets = await fetchPets();
      const selectedPet = pets.find((p) => p.name === petName);
      setPet(selectedPet);
    };
    getPetDetails();
  }, [petName]);


  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card sx={{ 
        width: '25%',
        borderRadius: 8, 
        padding: '20px',
        margin: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Box mt={2}>
            <IconButton component={Link} to="/" color="primary">
              <ArrowBackIcon />
            </IconButton>
          </Box>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {pet.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {pet.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Breed: {pet.breed}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight: {pet.weight}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Color: {pet.color}
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
};

export default PetDetails;
