
import { fetchMovies } from '../src/infrastructure/api/api';
import axios from 'axios';

jest.mock('axios');

describe('fetchMovies', () => {
    it('fetch successfully data from the API', async () => {
        const responseData = await { results: [{ id: 1, title: 'Movie 1' }] };
        axios.get.mockResolvedValueOnce({ data: responseData });
        const data = await fetchMovies();
        console.log("responseDataresponseDatauu", responseData.results);
        expect(data).toEqual(responseData.results);
    });

    it('fetch failure data from the API', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockRejectedValueOnce(new Error(errorMessage));
        try {
            await fetchMovies();
        } catch (error) {
            expect(error.message).toBe(errorMessage);
        }
    });
});
