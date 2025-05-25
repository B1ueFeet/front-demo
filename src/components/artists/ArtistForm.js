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
    <form className="form-card" onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: 20 }}>{artist && artist.id ? 'Editar Artista' : 'Agregar Artista'}</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Nationality:</label>
        <input
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">Guardar</button>
        <button type="button" className="btn-secondary" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
};

export default ArtistForm;