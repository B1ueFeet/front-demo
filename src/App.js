import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import ArtistsPage from './pages/ArtistsPage';
import SongsPage from './pages/SongsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        {/* Menú de navegación */}
              <nav className="main-navbar">
        <ul>
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/artists" className="nav-link">Artistas</Link></li>
          <li><Link to="/songs" className="nav-link">Canciones</Link></li>
        </ul>
      </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/artists" component={ArtistsPage} />
          <Route path="/songs" component={SongsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;