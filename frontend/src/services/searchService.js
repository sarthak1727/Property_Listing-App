import axios from 'axios';

const API_URL = 'https://property-listing-app-backend.onrender.com';

export const searchProperties = async (searchParams) => {
  try {
    const response = await axios.get(API_URL, { params: searchParams });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
