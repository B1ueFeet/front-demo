import React, { useEffect, useState } from 'react';
import ArtistForm from '../components/artists/ArtistForm';
import ArtistList from '../components/artists/ArtistList';
import * as artistService from '../services/artistService';

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);
  const [editingArtist, setEditingArtist] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await artistService.getArtists();
      setArtists(data);
    };
    fetchArtists();
  }, []);

  const handleArtistSave = async (artist) => {
    if (artist.id) {
      await artistService.updateArtist(artist.id, artist);
    } else {
      await artistService.createArtist(artist);
    }
    const data = await artistService.getArtists();
    setArtists(data);
    setEditingArtist(null);
    setShowForm(false);
  };

  const handleArtistDelete = async (id) => {
    await artistService.deleteArtist(id);
    const data = await artistService.getArtists();
    setArtists(data);
  };

  const handleEdit = (artist) => {
    setEditingArtist(artist);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingArtist(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingArtist(null);
    setShowForm(false);
  };

  return (
    <div>
      <h1>Artists</h1>
      <button className="btn-primary" onClick={handleAdd}>Agregar artista</button>
      <ArtistList artists={artists} onEdit={handleEdit} onDelete={handleArtistDelete} />
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ArtistForm artist={editingArtist} onSave={handleArtistSave} onCancel={handleCancel} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistsPage;