import React from 'react';

const SongTable = ({ songs, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Duration</th>
          <th>Artist ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {songs.map(song => (
          <tr key={song.id}>
            <td>{song.id}</td>
            <td>{song.title}</td>
            <td>{song.duration}</td>
            <td>{song.artistId}</td>
            <td>
              <button onClick={() => onEdit(song)}>Edit</button>
              <button onClick={() => onDelete(song.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongTable;