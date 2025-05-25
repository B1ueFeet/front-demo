import React from 'react';

const ArtistTable = ({ artists, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Nationality</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {artists.map(artist => (
          <tr key={artist.id}>
            <td>{artist.id}</td>
            <td>{artist.name}</td>
            <td>{artist.nationality}</td>
            <td>
              <button onClick={() => onEdit(artist)}>Edit</button>
              <button onClick={() => onDelete(artist.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArtistTable;