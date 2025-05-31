import '../css/MovieCard.css'
import image from "../assets/download.jpg"
import { useMovieContext } from '../Context/MovieContext'
function MovieCard({ movie }) {

    const { isFav, addToFav, removeFromFav } = useMovieContext()
    const favorate = isFav(movie.id)
    function onclickfav(event) {
        event.preventDefault()
        if (favorate) addToFav(movie.id)
        else removeFromFav(movie)
    }

    return (
        <div className="movie-card">
            <div className="movie-post">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
                <button className={`favorate-btn ${favorate ? "active" : ""}`} onClick={(e) => onclickfav(e)}>
                    <span className="material-symbols-outlined">favorite</span>
                </button>
            </div>
            <div className="movie-title">
                <h3 >{movie.title}</h3>
                <p > {movie.release_date?.split("-")[0]}</p>
            </div>
        </div>

    )
}
export default MovieCard

