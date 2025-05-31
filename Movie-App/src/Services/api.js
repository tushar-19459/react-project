const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlMTRjZGMzNWJlN2QyNDUxMWE2MTcwODMxNmZkZCIsIm5iZiI6MTc0ODY4Nzc0NS45NDEsInN1YiI6IjY4M2FkYjgxMWM5ZTYxMjY4YzdmMzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZhEGgN9z4wvOJ2jVmrxQHb124i-7lQKJpEY8kE5whc'
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzZjZGZkMTZlMTNlMTY4Y2VlMjU3YmJkNGZjMmNhYiIsIm5iZiI6MTc0ODY5ODMwNC45MjMsInN1YiI6IjY4M2IwNGMwOGNjN2YxMzM0NzdmMzhmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryRldYYGX9c6d4qjaC2nPWpvARSCtCBiyo_SqwjojxY'
    }
};


export const getPopularMovies = async () => {
    try {
        const movieMap = new Map(); // key: movie.id, value: movie object
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
                        movieMap.set(movie.id, movie); // Only add if not already present
                    }
                });
            }
        }

        const uniqueMovies = Array.from(movieMap.values()); // Convert map to array
        console.log("Unique movies:", uniqueMovies.length);

        return uniqueMovies;
    } catch (err) {
        console.error("Error fetching popular movies:", err);
        return [];
    }
};




// export const getPopularMovies = async () => {
//     try {
//         let data = []; // Start with an empty flat array
//         let pgno = 1;


//         while (pgno <= 100) {
//             const url1 = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pgno}`;
//             const response = await fetch(url1, options);
//             const json = await response.json();
//             console.log(`Fetched page: ${pgno}`);
//             pgno++;

//             if (json.results) {
//                 data.push(...json.results); // Push each movie, not the whole results array
//             }
//         }

//         // data.forEach(movie => {
//         //     console.log(movie.original_title);
//         // });

//         return data; // A flat array of all movies
//     } catch (err) {
//         console.error("Error fetching popular movies:", err);
//         return [];
//     }
// };


// export const getPopularMovies = async () => {
//   const url1 = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

//   try {
//     const response = await fetch(url1, options);
//     const json = await response.json();
//     const data = json.results;
//     console.log(json.total_results)
//     // data.forEach(movie => {
//     //   console.log(movie.original_title);
//     // });

//     return data; // return just the movies array, or return json if you need full response
//   } catch (err) {
//     console.error(err);
//     return [];
//   }
// };





export const searchMovie = async (search) => {
    const url2 = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}&include_adult=false&language=en-US&page=1`;
    const responcse = await fetch(url2, options).then(res => res.json()).catch(err => console.error(err));
    // fetch(url, options).then(res => res.json()).then(json => {console.log(json.results);}).catch(err => console.error(err));
    return responcse
}




