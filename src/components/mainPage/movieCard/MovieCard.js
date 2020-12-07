import '../movieCard/MovieCard.css'

export function MovieCard(props){
    return(
        <div className="movieCard">
            <div className="title">
                <h1 className="cardHeader">{props.result.original_title}</h1>
                {/* <h4>↓</h4> */}
            </div>
            <img src={'https://image.tmdb.org/t/p/w300' + props.result.poster_path} alt="moviePoster"></img>
        </div>
    )
}