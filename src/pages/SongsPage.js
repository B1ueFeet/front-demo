import React, { use, useEffect, useState } from 'react';
import SongForm from '../components/songs/SongForm';
import SongList from '../components/songs/SongList';
import * as songService from '../services/songService';
import * as artistService from '../services/artistService';

const SongsPage = () => {
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [editingSong, setEditingSong] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await artistService.getArtists();
      setArtists(data);
    };
    fetchArtists();
  }
    , []);

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await songService.getSongs();
      setSongs(data);
    };
    fetchSongs();
  }, []);

  const handleSongSave = async (song) => {
    if (song.id) {
      await songService.updateSong(song.id, song);
    } else {
      await songService.createSong(song);
    }
    const data = await songService.getSongs();
    setSongs(data);
    setEditingSong(null);
    setShowForm(false);
  };

  const handleSongDelete = async (id) => {
    await songService.deleteSong(id);
    const data = await songService.getSongs();
    setSongs(data);
  };

  const handleEdit = (song) => {
    setEditingSong(song);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingSong(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingSong(null);
    setShowForm(false);
  };

  return (
    <div>
      <h1>Songs</h1>
      <button className="btn-primary" onClick={handleAdd}>Agregar canción</button>
      <SongList songs={songs} onEdit={handleEdit} onDelete={handleSongDelete} artists={artists} />
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <SongForm
              song={editingSong}
              artists={artists}
              onSave={handleSongSave}
              onCancel={handleCancel}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SongsPage;