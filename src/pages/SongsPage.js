import React, { useEffect, useState } from 'react';
import SongForm from '../components/songs/SongForm';
import SongList from '../components/songs/SongList';
import * as songService from '../services/songService';

const SongsPage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await songService.getSongs();
      setSongs(data);
    };

    fetchSongs();
  }, []);

  const addSong = async (song) => {
    const newSong = await songService.createSong(song);
    setSongs([...songs, newSong]);
  };

  const updateSong = async (updatedSong) => {
    await songService.updateSong(updatedSong);
    setSongs(songs.map(song => (song.id === updatedSong.id ? updatedSong : song)));
  };

  const deleteSong = async (id) => {
    await songService.deleteSong(id);
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <div>
      <h1>Songs Management</h1>
      <SongForm onAddSong={addSong} />
      <SongList songs={songs} onUpdateSong={updateSong} onDeleteSong={deleteSong} />
    </div>
  );
};

export default SongsPage;