import React from 'react';
import SongTable from './SongTable';

const SongList = ({ songs, onEdit, onDelete, artists }) => (
  <div>
    <h2>Song List</h2>
    <SongTable songs={songs} onEdit={onEdit} onDelete={onDelete} artists={artists} />
  </div>
);

export default SongList;