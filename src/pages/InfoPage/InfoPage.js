const InfoPage = (props)=>{
    return(
    // <div>{props.result.overview}</div>
    <div className='infopage'>
        <h1>{props.result.original_title} ({props.id})</h1>
       <h3>{props.result.overview}</h3>
        </div> 
    )
}

export default InfoPage