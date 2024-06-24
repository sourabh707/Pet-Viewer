import axios from 'axios';
let cachedPets = null;

export const fetchPets = async () => {
  if (cachedPets) {
    return cachedPets;
  }

  try {
    const response = await axios.get('https://run.mocky.io/v3/9e75b547-fd0e-4a1c-b40c-aa4fc943892f')
    cachedPets = response.data.pets;
    console.log(response.data.pets)
    return response.data;
  } catch (error) {
    console.error('Error fetching pet data:', error);
    return { error: error.message };
  }
};
