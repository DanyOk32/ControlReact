import axios from 'axios';
// ---------------------------------------------------------------------------
const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2QwZjM2YmMwNDI1MTk5Mzg1MjI3NGFhMDQzYTlmMSIsIm5iZiI6MTc0Njk1MzYzMi43MDUsInN1YiI6IjY4MjA2NWEwZTFjMDdkNjg4OTJkMTUzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q_J5-eiHw6hLGDsJPab0zhaW9OambXM_3pZSJgvl-Fs',
    },
});
// ---------------------------------------------------------------------------
export type MovieType = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview?: string;
};
// ---------------------------------------------------------------------------
export type GenreType = {
    id: number;
    name: string;
};
// ---------------------------------------------------------------------------
export const getMovies = async (page = 1, genreId?: number): Promise<{ data: { results: MovieType[] } }> => {
    let url = `/discover/movie?page=${page}`;
    if (genreId) url += `&with_genres=${genreId}`;
    const data = await API.get(url);
    return { data: data.data };
};
// ---------------------------------------------------------------------------
export const getGenres = async (): Promise<GenreType[]> => {
    const { data } = await API.get('/genre/movie/list');
    return data.genres;
};
// ---------------------------------------------------------------------------
export const searchMovies = async (query: string): Promise<MovieType[]> => {
    const { data } = await API.get(`/search/movie?query=${query}`);
    return data.results;
};
// ---------------------------------------------------------------------------
export const getMovieDetails = async (id: number): Promise<MovieType> => {
    const { data } = await API.get(`/movie/${id}`);
    return data;
};