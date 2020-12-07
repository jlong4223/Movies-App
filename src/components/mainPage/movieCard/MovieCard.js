import '../movieCard/MovieCard.css'
import {Route, Link} from 'react-router-dom'
import InfoPage from '../../../pages/InfoPage/InfoPage'


export function MovieCard(props){
    return(
        <div className="movieCard">
            
            <div className="title">
            <h1 className="cardHeader">{props.result.original_title}</h1>
                {/* <Route exact path="/info" render={  (props)=>
                    <InfoPage{...props}/>
                }/>   */}
            </div>
            <Link to="/info">
            <img src={'https://image.tmdb.org/t/p/w300' + props.result.poster_path} alt="moviePoster"></img>
            </Link>
            {/* <InfoPage /> */}
        </div>
    )
}