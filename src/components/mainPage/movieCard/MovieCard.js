import '../movieCard/MovieCard.css'

export function MovieCard(props){
    return(
        <div className="movieCard">
            <h1>{props.result.original_title}</h1>
            <img src={'https://image.tmdb.org/t/p/w300' + props.result.poster_path} alt="moviePoster"></img>
        </div>
    )
}