import React, { useState, useEffect } from 'react';

const ArtistForm = ({ artist, onSave, onCancel }) => {
  const [name, setName] = useState(artist ? artist.name : '');
  const [nationality, setNationality] = useState(artist ? artist.nationality : '');

  useEffect(() => {
    if (artist) {
      setName(artist.name);
      setNationality(artist.nationality);
    }
  }, [artist]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const artistData = {
      id: artist ? artist.id : null,
      name,
      nationality,
    };
    onSave(artistData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Nationality:</label>
        <input
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ArtistForm;