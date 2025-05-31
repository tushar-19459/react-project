import '../css/MovieCard.css'
import image from "../assets/download.jpg"
function MovieCard({ movie }) {
    function onclickfav(event) {
        console.log(event)
    }

    return (
        <div className="movie-card">
            <div className="movie-post">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
                <button className="favorate-btn" onClick={(e) => onclickfav(e)}>
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

