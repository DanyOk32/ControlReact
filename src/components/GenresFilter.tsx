import { useEffect, useState } from 'react';
import { getGenres } from '../services/api';
import type { GenreType } from '../services/api';
import './styles.css';
// ---------------------------------------------------------------------------
const GenresFilter = ({ onSelectGenre }: { onSelectGenre: (id: number) => void }) => {
    const [genres, setGenres] = useState<GenreType[]>([]);
    useEffect(() => {
        getGenres().then(setGenres);
    }, []);
    return (
        <div className="genres-filter">
            <h3>Жанры</h3>
            <div className="genre-buttons">
                {genres.map((genre) => (
                    <button key={genre.id} className="genre-button" onClick={() => onSelectGenre(genre.id)}>
                        {genre.name}
                    </button>
                ))}
            </div>
        </div>
    );
};
// ---------------------------------------------------------------------------
export default GenresFilter;