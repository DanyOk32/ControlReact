import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import type { MovieType } from '../services/api';
import '../components/styles.css';
// ---------------------------------------------------------------------------
const MovieDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieType | null>(null);
    useEffect(() => {
        if (id) getMovieDetails(Number(id)).then(setMovie);
    }, [id]);
    if (!movie) return <div>Загрузка...</div>;
    return (
        <div className="movie-details">
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Оценка: &#127775; {movie.vote_average}</p>
        </div>
    );
};
// ---------------------------------------------------------------------------
export default MovieDetailsPage;