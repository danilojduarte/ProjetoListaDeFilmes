fetch(genresListHttp + new URLSearchParams({
    apiKey: apiKey
}))
.then(res => res.json())
.then(data => {
    data.genres.forEach(item => {
        fetchMoviesListByGenres(item.id, item.name)
    });
})


const fetchMoviesListByGenres = (id, genres) => {
    fetch(movieGenresHttp + URLSearchParams({
        apiKey:apiKey,
        with_genres: id,
        page: Math.floor(Math.random() *3) +1
    }))
    .then(res => res.json())
    .then(data => console.log(data))
}