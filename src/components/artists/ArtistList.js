import React, { useEffect, useState } from 'react';
import { getArtists } from '../../services/artistService';
import ArtistTable from './ArtistTable';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await getArtists();
      setArtists(data);
    };

    fetchArtists();
  }, []);

  return (
    <div>
      <h2>Artist List</h2>
      <ArtistTable artists={artists} />
    </div>
  );
};

export default ArtistList;