import { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import type { MovieType } from '../services/api';
import MovieCard from './MovieCard';
import GenresFilter from './GenresFilter';
import Pagination from './Pagination';
import './styles.css';
// ---------------------------------------------------------------------------
const MoviesList = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [page, setPage] = useState(1);
    useEffect(() => {
        getMovies(page, selectedGenre || undefined).then(({ data }) => {
            setMovies(data.results);
        });
    }, [page, selectedGenre]);
    return (
        <div className="movies-section">
            <GenresFilter onSelectGenre={setSelectedGenre} />
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Pagination page={page} onChange={setPage} />
        </div>
    );
};
// ---------------------------------------------------------------------------
export default MoviesList;