const main = document.querySelector(".main")

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
    fetch(movieGenresHttp + new URLSearchParams({
        apiKey:apiKey,
        with_genres: id,
        page: Math.floor(Math.random()*3) +1
    }))
    .then(res => res.json())
    .then(data => { 
        makeCategoryElement(`${genres}_movies`, data.results)
    })

    .catch(err => console.log(err))
}


const makeCategoryElement = (category, data)=>{
    main.innerHTML += `
    <div class="movie-list">
            <button class="pre-btn">
                <img src="assets/prev.png" alt="seta PREVIOUS">
            </button>

            <h2 class="movie-category">
                ${category}
            </h2>
            <div class="movie-container" id="${category.replace("_", " ")}">

            </div>

            <button class="next-btn">
                <img src="assets/next.png" alt="Seta Nexte">
            </button>
        </div>
    `
    makeCards(category, data)
}

const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id)

    data.forEach((item, i)=>{
        if(item.backdrop_path == null){
            item.backdrop_path = item.poster_path;
            if(item.backdrop_path == null){
                return
            }
        }

        movieContainer.innerHTML += `
        <div class="movie">
            <img src="${imgUrl}${item.backdrop_path}" alt="Poster">
            <p class="movie-title">${item.title}</p>
        </div>
        `

    })
}