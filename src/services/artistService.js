import axios from 'axios';

const API_URL = 'http://localhost:5000/artists';

// Datos mock para desarrollo
const mockArtists = [
  { id: 1, name: 'Artista 1', genre: 'Rock' },
  { id: 2, name: 'Artista 2', genre: 'Pop' },
];

export const getArtists = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    // Retorna datos mock si falla la petición
    return mockArtists;
  }
};

export const getArtistById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    // Busca en los datos mock
    return mockArtists.find(a => a.id === Number(id));
  }
};

export const createArtist = async (artist) => {
  try {
    const response = await axios.post(API_URL, artist);
    return response.data;
  } catch (error) {
    // Simula creación en mock
    const newArtist = { ...artist, id: Date.now() };
    mockArtists.push(newArtist);
    return newArtist;
  }
};

export const updateArtist = async (id, artist) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, artist);
    return response.data;
  } catch (error) {
    // Simula actualización en mock
    const index = mockArtists.findIndex(a => a.id === Number(id));
    if (index !== -1) {
      mockArtists[index] = { ...mockArtists[index], ...artist };
      return mockArtists[index];
    }
    return null;
  }
};

export const deleteArtist = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    // Simula borrado en mock
    const index = mockArtists.findIndex(a => a.id === Number(id));
    if (index !== -1) {
      mockArtists.splice(index, 1);
    }
  }
};