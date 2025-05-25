import React from 'react';

const SongTable = ({ songs, onEdit, onDelete, artists }) => (
  <table className="table entity-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {songs.map(song => {
        const artist = (artists || []).find(a => a.id === Number(song.artistId));
        return (
          <tr key={song.id}>
            <td>{song.id}</td>
            <td>{song.title}</td>
            <td>{artist ? artist.name : ''}</td>
            <td>
              <button className="btn-primary" onClick={() => onEdit(song)}>Edit</button>
              <button className="btn-secondary" onClick={() => onDelete(song.id)}>Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default SongTable;