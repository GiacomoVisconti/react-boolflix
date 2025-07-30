import { createContext, useContext, useEffect, useState } from "react";
const MovieTvContext = createContext()

function MovieTvProvider({ children }) {

    const [movieData, setMovieData] = useState(null)
    const [tvData, setTvData] = useState(null)
    const [movieGenres, setMovieGenres] = useState(null)
    const [tvGenres, setTvGenres] = useState(null)
    const [popularMoviesData, setPopularMoviesData] = useState(null)

    function onSearchClick(searchTitle) {
        let string = searchTitle?.replace(" ", "+")

        let url_movie = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${string}`
        let url_tvSeries = `https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&query=${string}`


        fetch(url_movie)
            .then(res => res.json())
            .then(data => {
                setMovieData(data)


            })

        fetch(url_tvSeries)
            .then(res => res.json())
            .then(data => {
                setTvData(data)


            })


    }


    useEffect(() => {
        const movie_genres_url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`
        const tv_genres_url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${import.meta.env.VITE_API_KEY}`
        const popular_movies_url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`

        fetch(movie_genres_url)
            .then(res => res.json())
            .then(data => {
                setMovieGenres(data)
                console.log(data);

            })
        fetch(tv_genres_url)
            .then(res => res.json())
            .then(data => {
                setTvGenres(data)
            })
        fetch(popular_movies_url)
            .then(res => res.json())
            .then(data => {
                setPopularMoviesData(data)


            })



    }, [])


    return (
        <MovieTvContext.Provider
            value={{
                onSearchClick, movieData, tvData, movieGenres, tvGenres, popularMoviesData,
            }}>

            {children}

        </MovieTvContext.Provider>
    )

}

function useMovieTv() {
    return useContext(MovieTvContext)
}

export { MovieTvProvider, useMovieTv }