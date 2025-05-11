import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
// ---------------------------------------------------------------------------
const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Поиск фильма..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Найти</button>
        </div>
    );
};
// ---------------------------------------------------------------------------
export default SearchBar;