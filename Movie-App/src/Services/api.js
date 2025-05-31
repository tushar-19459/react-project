const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlMTRjZGMzNWJlN2QyNDUxMWE2MTcwODMxNmZkZCIsIm5iZiI6MTc0ODY4Nzc0NS45NDEsInN1YiI6IjY4M2FkYjgxMWM5ZTYxMjY4YzdmMzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZhEGgN9z4wvOJ2jVmrxQHb124i-7lQKJpEY8kE5whc'
    }
};


export const getPopularMovies = async () => {
  const url1 = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  try {
    const response = await fetch(url1, options);
    const json = await response.json();
    const data = json.results;

    data.forEach(movie => {
      console.log(movie.original_title);
    });

    return data; // return just the movies array, or return json if you need full response
  } catch (err) {
    console.error(err);
    return [];
  }
};



export const searchMovie = async (search) => {
    const url2 = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}&include_adult=false&language=en-US&page=1`;
    const responcse = await fetch(url2, options).then(res => res.json()).catch(err => console.error(err));
    // fetch(url, options).then(res => res.json()).then(json => {console.log(json.results);}).catch(err => console.error(err));
    return responcse
}




