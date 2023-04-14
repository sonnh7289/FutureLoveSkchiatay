import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard/MovieCard';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Loading from './components/Loadding';

function App() {
  const [query, setQuery] = useState("")
  const [moviesList, setMovies] = useState([]);
  const [loadMore, setLoadMore] = useState(12); 
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://raw.githubusercontent.com/sonnh7289/NOTECOLOR./main/api/skchiatay.json");
      setMovies(data)
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  
  const movieSlice = moviesList.slice(0, loadMore);

  const handleLoadMore = () => {
    setLoadMore(loadMore + 8);
  }
  
  const keys = ["nam", "nu"];
  
  useEffect(() => {
    getMovies();
  }, [])

  if (loading) {
    return <Loading />
  } 

  return (
    <div className="App">
      <NavBar setQuery={setQuery}/>
      <div className="label-name">
        <h1>List Anh Nam Nu De Test</h1>
      </div>
      <main className="main">
        {}
        {
          query.length !== 0 ?
          (moviesList.filter(sukien => keys.some((key) => sukien[key].toLowerCase().includes(query))).map((sukien) => <MovieCard key={sukien.id} movie={sukien} />)) 
          : 
          ( movieSlice.filter(sukien => keys.some((key) => sukien[key].toLowerCase().includes(query))).map((sukien) => <MovieCard key={sukien.id} movie={sukien} /> ))
        }
      </main>
      <div className="Loadmore">
        <button className="btn-Loadmore" onClick={handleLoadMore}>Xem thêm</button>
      </div>
      <Footer />
    </div>
  )
}

export default App;
