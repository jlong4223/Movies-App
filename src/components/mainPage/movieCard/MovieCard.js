
export function MovieCard(props){
    return(
        <div>
            <h1>{props.result.original_title}</h1>
            <img src={'https://image.tmdb.org/t/p/w300' + props.result.poster_path}></img>
        </div>
    )
}