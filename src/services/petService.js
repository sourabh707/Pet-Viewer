import axios from 'axios';

export const fetchPets = async () => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/9e75b547-fd0e-4a1c-b40c-aa4fc943892f')
    // console.log(response.data)
    return response?.data?.pets;
  } catch (error) {
    // console.error('Error fetching pet data:', error);
    return { error: error.message };
  }
};
