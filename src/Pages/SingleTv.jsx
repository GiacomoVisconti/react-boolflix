import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import FilmRate from "../components/FilmRate"


export default function SingleTv() {
    const { id } = useParams()
    const [movieData, setMovieData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_API_KEY}`
    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMovieData(data)
                console.log(movieData);

            })
            .finally(() => setIsLoading(false))
    }, [])


    return (
        <div className="bg-dark">
            <div className="container">
                <div className="card border-0 py-5 bg-dark">
                    {movieData && <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://image.tmdb.org/t/p/w342/${movieData?.poster_path}`} className="img-fluid rounded-start" alt={movieData.name} />
                        </div>
                        <div className="col-md-8 px-5">
                            <div className="card-body bg-dark text-light">
                                <h1 className="card-title pb-4">{movieData.name.toUpperCase()}</h1>
                                <p className="card-text"><b>Language:</b> {movieData.original_language.toUpperCase()}</p>
                                <div className="d-flex">
                                    <b>Voto:</b>
                                    {<FilmRate element={movieData} />}
                                </div>
                                <div className="pt-3">
                                    <b>Overview: </b> <p className="fs-6">{movieData.overview}</p>
                                </div>
                                <div className="d-flex">
                                    <b>Genres:</b>
                                    {movieData.genres.map(({ name }, index) => {
                                        return <p key={index} className="px-1">{name},</p>

                                    })}
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>

        </div>
    )
}