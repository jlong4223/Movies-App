import './App.css';
import Header from '../src/components/header/Header'
import {MovieCard} from './components/mainPage/movieCard/MovieCard'

import {useState, useEffect} from 'react'

import {fetchApiData} from './services/movie-api'



function App() {

  const [movieData, setMovieData] = useState({
    dates: {},
    page: 1,
    results:[], 
    total_pages: 72,
    total_results: 1433
  })

  async function getAppData(){
    const data = await fetchApiData()
    setMovieData(data)
  }

  useEffect(()=>{
    getAppData()
    console.log('effect in use')
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="movies">
      {movieData.results.map((result, idx)=>(
        <MovieCard key={idx+1} result={result}/>
      ))}
      </div>
    </div>
  );
}

export default App;
