import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as songService from '../../services/songService';

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await songService.getSongs();
      setSongs(data);
    };

    fetchSongs();
  }, []);

  const handleDelete = async (id) => {
    await songService.deleteSong(id);
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <div>
      <h2>Song List</h2>
      <Link to="/songs/new" className="btn btn-primary">Add New Song</Link>
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
                <Link to={`/songs/edit/${song.id}`} className="btn btn-warning">Edit</Link>
                <button onClick={() => handleDelete(song.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;