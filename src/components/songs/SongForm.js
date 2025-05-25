import React, { useState, useEffect } from 'react';

// Convierte ISO 8601 duration a segundos
function isoToSeconds(iso) {
  if (!iso) return 0;
  const match = iso.match(/PT(\d+(\.\d+)?)S/);
  if (match) {
    const seconds = Number(match[1]);
    // Si es menor a 1 segundo, lo consideramos vacío
    if (seconds < 1) return '';
    return Math.floor(seconds);
  }
  return '';
}

// Convierte segundos a mm:ss
function secondsToMMSS(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Convierte mm:ss a segundos
function mmssToSeconds(mmss) {
  const [m, s] = mmss.split(':').map(Number);
  return m * 60 + (s || 0);
}

// Convierte segundos a ISO 8601 duration
function secondsToIso(seconds) {
  return `PT${seconds}S`;
}

const SongForm = ({ song, onSave, onCancel, artists }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    duration: '',
    artistId: ''
  });

  useEffect(() => {
    if (song) {
      const seconds = isoToSeconds(song.duration);
      setFormData({
        id: song.id || '',
        title: song.title || '',
        duration: seconds !== '' ? secondsToMMSS(seconds) : '',
        artistId: song.artistId || ''
      });
    } else {
      setFormData({
        id: '',
        title: '',
        duration: '',
        artistId: ''
      });
    }
  }, [song]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const durationIso = secondsToIso(mmssToSeconds(formData.duration));
    onSave({ ...formData, duration: durationIso });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: 20 }}>{formData.id ? 'Editar Canción' : 'Agregar Canción'}</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Duration (mm:ss):</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="mm:ss"
          pattern="^\d{1,2}:\d{2}$"
          required
        />
      </div>
      <div className="form-group">
        <label>Artist:</label>
        <select
          name="artistId"
          value={formData.artistId}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un artista</option>
          {(artists || []).map(artist => (
            <option key={artist.id} value={artist.id}>{artist.name}</option>
          ))}
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">Guardar</button>
        <button type="button" className="btn-secondary" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
};

export default SongForm;