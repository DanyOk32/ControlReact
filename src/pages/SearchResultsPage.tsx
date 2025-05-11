import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import type { MovieType } from '../services/api';
import MovieCard from '../components/MovieCard';
import '../components/styles.css';

const SearchResultsPage = () => {
    const [params] = useSearchParams();
    const query = params.get('q') || '';
    const [results, setResults] = useState<MovieType[]>([]);

    useEffect(() => {
        if (query.trim()) {
            searchMovies(query).then(setResults);
        }
    }, [query]);

    return (
        <div className="movie-list">
            {results.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default SearchResultsPage;