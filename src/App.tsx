import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import SearchBar from './components/SearchBar';
import UserInfo from './components/UserInfo';
import './components/styles.css';

const AppHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="header-bar">
            <h1 className="app-title" onClick={() => navigate('/')}>🎬 MovieDB</h1>
            <SearchBar />
            <UserInfo />
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <AppHeader />
                <Routes>
                    <Route path="/" element={<MoviesList />} />
                    <Route path="/movie/:id" element={<MovieDetailsPage />} />
                    <Route path="/search" element={<SearchResultsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;