import React, { useEffect, useState } from 'react';
import { getArtists } from '../../services/artistService';
import ArtistTable from './ArtistTable';

const ArtistList = ({ artists, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Artist List</h2>
      <ArtistTable artists={artists} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default ArtistList;