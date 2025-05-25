import React, { useState, useEffect } from 'react';

const SongForm = ({ currentSong, onSave, artists }) => {
  const [song, setSong] = useState({ id: '', title: '', duration: '', artistId: '' });

  useEffect(() => {
    if (currentSong) {
      setSong(currentSong);
    }
  }, [currentSong]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({ ...song, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(song);
    setSong({ id: '', title: '', duration: '', artistId: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={song.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Duration:</label>
        <input type="text" name="duration" value={song.duration} onChange={handleChange} required />
      </div>
      <div>
        <label>Artist:</label>
        <select name="artistId" value={song.artistId} onChange={handleChange} required>
          <option value="">Select Artist</option>
          {artists.map(artist => (
            <option key={artist.id} value={artist.id}>{artist.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Save Song</button>
    </form>
  );
};

export default SongForm;