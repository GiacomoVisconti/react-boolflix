import { createContext, useContext, useState } from "react";
const MovieTvContext = createContext()

function MovieTvProvider() {
    let url_movie
    let url_tvSeries
    const [movieData, setMovieData] = useState(null)
    const [tvData, setTvData] = useState(null)




    function onSearchClick(searchTitle) {
        let string = searchTitle?.replace(" ", "+")

        url_movie = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${string}`
        url_tvSeries = `https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&query=${string}`


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


    return (
        <MovieTvContext.Provider
            value={{
                onSearchClick, movieData, tvData,
            }}>

            {children}

        </MovieTvContext.Provider>
    )

}

function useMovieTv() {
    return useContext(MovieTvContext)
}

export { MovieTvProvider, useMovieTv }