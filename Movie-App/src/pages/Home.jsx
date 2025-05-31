import "../css/Home.css"
import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import { getPopularMovies, searchMovie } from "../Services/api"
function Home() {

    const [search, setsearch] = useState("")
    const [movie, setmovie] = useState([]);
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const loadpopularmovies = async () => {
            try {
                const data = await getPopularMovies()
                setmovie(data)
                // console.log(movie)
            } catch (err) {
                console.log(err)
                seterror("falid to load errors ")
            }
            finally {
                setloading(false)
            }
        }
        loadpopularmovies()
    }, [])



    // async function handlesearch() {
    //     if (!search.trim()) return
    //     if (loading) return

    //     setloading(true)

    //     try {
    //         const searchres = await searchMovie(search)
    //         setmovie(searchres)
    //         seterror(false)
    //     } catch (error) {
    //         seterror("no match found")
    //     } finally {
    //         setloading(false)
    //     }
    // }
    return (
        <div className="home">
            <form  className="search-form">
                <input type="text" onChange={(e) => { setsearch(e.target.value) }} className="search-input" placeholder="Search for movie ..." />
                <button className="search-button" type="submit" >Search</button>
            </form>

            {error && <div>{error}</div>}
            {loading ? <div className="loading">loading...</div> :
                <div className="movi-grid">
                    {movie.map((movie) => 
                        movie.title.toLowerCase().startsWith(search) && (<div className="card" key={movie.id}> < MovieCard movie={movie} /></div>)
                    )}
                </div>}
        </div>
    )
}
export default Home