import { Link } from 'react-router-dom';
import type { MovieType } from '../services/api';
import './styles.css';

const MovieCard = ({ movie }: { movie: MovieType }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`} className="movie-link">
                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-img"
                />
                <h4 className="movie-title">{movie.title}</h4>
                <p className="movie-rating">⭐ {movie.vote_average}</p>
            </Link>
        </div>
    );
};

export default MovieCard;