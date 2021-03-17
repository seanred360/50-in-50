const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=52c0112f1dc3e042da8cc29273e5abfe&query="'

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=52c0112f1dc3e042da8cc29273e5abfe&page=1"
const API_URL_WILLFERRELL = "https://api.themoviedb.org/3/discover/movie?/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=52c0112f1dc3e042da8cc29273e5abfe&page=1"
const API_URL_DRAMAS = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=52c0112f1dc3e042da8cc29273e5abfe&page=1"

const nextPage = document.getElementById('next-page')
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const dramas = document.getElementById('dramas')

let pageNumber = 1;

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

nextPage.addEventListener('click', () => {
    pageNumber++
    getMovies(API_URL.slice(0, -1) + pageNumber)
})

dramas.addEventListener('click', () => {
    pageNumber = 1
    getMovies(API_URL_DRAMAS)
})