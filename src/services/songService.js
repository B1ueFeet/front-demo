import axios from 'axios';

const API_URL = 'http://localhost:5000/songs';

// Datos mock para desarrollo
const mockSongs = [
  { id: 1, title: 'Canción 1', artist: 'Artista 1', genre: 'Rock' },
  { id: 2, title: 'Canción 2', artist: 'Artista 2', genre: 'Pop' },
];

export const getSongs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    // Retorna datos mock si falla la petición
    return mockSongs;
  }
};

export const getSongById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    // Busca en los datos mock
    return mockSongs.find(s => s.id === Number(id));
  }
};

export const createSong = async (song) => {
  try {
    const response = await axios.post(API_URL, song);
    return response.data;
  } catch (error) {
    // Simula creación en mock
    const newSong = { ...song, id: Date.now() };
    mockSongs.push(newSong);
    return newSong;
  }
};

export const updateSong = async (id, song) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, song);
    return response.data;
  } catch (error) {
    // Simula actualización en mock
    const index = mockSongs.findIndex(s => s.id === Number(id));
    if (index !== -1) {
      mockSongs[index] = { ...mockSongs[index], ...song };
      return mockSongs[index];
    }
    return null;
  }
};

export const deleteSong = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    // Simula borrado en mock
    const index = mockSongs.findIndex(s => s.id === Number(id));
    if (index !== -1) {
      mockSongs.splice(index, 1);
    }
  }
};