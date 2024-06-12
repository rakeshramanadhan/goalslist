import axios from 'axios';

const fetchImage = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: 'U2DQCgdAdO8gnsY72NBHHYzJWwArDalkW6qHFSqU9B0',
        query: 'landscape', // Optional query parameter
        orientation: 'landscape', // Ensure the image is landscape-oriented
      },
    });

    if (response.data.urls && response.data.urls.full) {
      return response.data.urls.full;
    }

    return null;
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error);
    return null;
  }
};

export default fetchImage;