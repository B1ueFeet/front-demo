import React, { useEffect, useState } from 'react';
import ArtistForm from '../components/artists/ArtistForm';
import ArtistList from '../components/artists/ArtistList';
import * as artistService from '../services/artistService';

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await artistService.getArtists();
      setArtists(data);
    };
    fetchArtists();
  }, []);

  const handleArtistSelect = (artist) => {
    setSelectedArtist(artist);
  };

  const handleArtistSave = async (artist) => {
    if (artist.id) {
      await artistService.updateArtist(artist);
    } else {
      await artistService.createArtist(artist);
    }
    const data = await artistService.getArtists();
    setArtists(data);
    setSelectedArtist(null);
  };

  const handleArtistDelete = async (id) => {
    await artistService.deleteArtist(id);
    const data = await artistService.getArtists();
    setArtists(data);
  };

  return (
    <div>
      <h1>Artists</h1>
      <ArtistForm artist={selectedArtist} onSave={handleArtistSave} />
      <ArtistList artists={artists} onSelect={handleArtistSelect} onDelete={handleArtistDelete} />
    </div>
  );
};

export default ArtistsPage;