import '../css/MovieCard.css'

function MovieCard ({movie}){
const btnClick=() => {
alert("btn clicked")
}

    
    return(<div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={btnClick}>
                    ❤️
                </button>
            </div>
        </div>
        <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.date}</p>
        </div>
    </div>)

}
export default MovieCard 