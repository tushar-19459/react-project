const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzZjZGZkMTZlMTNlMTY4Y2VlMjU3YmJkNGZjMmNhYiIsIm5iZiI6MTc0ODY5ODMwNC45MjMsInN1YiI6IjY4M2IwNGMwOGNjN2YxMzM0NzdmMzhmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryRldYYGX9c6d4qjaC2nPWpvARSCtCBiyo_SqwjojxY'
    }
};


export const getPopularMovies = async () => {
    try {
        const movieMap = new Map();
        let pgno = 1;

        while (pgno <= 10) {
            const url1 = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pgno}`;
            const response = await fetch(url1, options);
            const json = await response.json();
            console.log(`Fetched page: ${pgno}`);
            pgno++;

            if (json.results) {
                json.results.forEach(movie => {
                    if (!movieMap.has(movie.id)) {
                        movieMap.set(movie.id, movie);
                    }
                });
            }
        }

        const uniqueMovies = Array.from(movieMap.values());
        console.log("Unique movies:", uniqueMovies.length);

        return uniqueMovies;
    } catch (err) {
        console.error("Error fetching popular movies:", err);
        return [];
    }
};

export const searchMovie = async (search) => {
    const url2 = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}&include_adult=false&language=en-US&page=1`;
    const responcse = await fetch(url2, options).then(res => res.json()).catch(err => console.error(err));
    // console.log(responcse)
    return responcse
}
