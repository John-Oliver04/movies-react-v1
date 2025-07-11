import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';

function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {

      const response = await api.get('/movies');

      setMovies(response.data);
      console.log("Movies fetched successfully:", response.data);

    } catch (error) {
      console.error("Error fetching movies:", error);
      
    }
  }
  
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='/home' element={<Home movies={movies} />} />
        <Route path="Trailer/:ytTrailerId" element={<Trailer />} />

      </Routes>
    </div>
  );
}

export default App;
