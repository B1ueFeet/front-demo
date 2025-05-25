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
        <nav className="navbar navbar-expand navbar-light bg-light mb-4">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artists">Artistas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/songs">Canciones</Link>
            </li>
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