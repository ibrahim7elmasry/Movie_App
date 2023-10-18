import axios from 'axios';

const apiKey = '2509c15c1c1370bae35cf31052da581c';
const baseUrl = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page = 1) => {
    try {
        const response = await axios.get(`${baseUrl}/movie/popular`, {
            params: {
                api_key: apiKey,
                language: 'en-US',
                page,
            },
        });
        return response.data.results;
    } catch (error) {
        throw error;
    }
};
