//import modules
import './App.css';
import Header from '../src/components/header/Header'
import {MovieCard} from './components/mainPage/movieCard/MovieCard'
import InfoPage from './pages/InfoPage/InfoPage'


//imported hooks below
import {useState, useEffect} from 'react'
  //the following are necessary for reacting routes and links to other 'pages'
import {Link, Route, Switch} from 'react-router-dom'

//database/API function below
import {fetchApiData} from './services/movie-api'



function App() {

  const NotFound=()=>{
    return(
        <div>404, not found</div>
    )
  }


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
      <Switch>
        <Route exact path='/' render={()=>
          <div className="movies">
          {movieData.results.map((result, idx)=>(
          <MovieCard key={idx} id={idx+1} result={result}/>
          ))}
          </div>
        }/>
        <Route exact path="/info" render={()=>
        <div>
          {movieData.results.map((result,idx, id)=>(
            <InfoPage key={idx} id={idx+1} result={result} />
          ))}
        </div>
        }/> 
        {/* <Route exact path="/info" component={InfoPage}/>  */}
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
