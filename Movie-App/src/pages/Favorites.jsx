import { useMovieContext } from "../Context/MovieContext"
import MovieCard from "../Components/MovieCard"
function Favorites(params) {
    const { favorites } = useMovieContext()
    if (favorites) {
        return (
            <>
                <h1>Favorite Movies</h1>
                <div className="movi-grid">
                    {favorites.map((movie) =>
                        (<div className="card" key={movie.id}> < MovieCard movie={movie} /></div>)
                    )}
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1>Favorite Movies</h1>
                <h3>No Movies Added</h3>
            </>
        )
    }
}
export default Favorites