import axios from 'axios';

export const fetchPets = async () => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/38fb30e5-437a-435e-af31-fcb27504d4c2')
    console.log(response.data)
    return response?.data?.pets;
  } catch (error) {
    console.error('Error fetching pet data:', error);
    return { error: error.message };
  }
};
