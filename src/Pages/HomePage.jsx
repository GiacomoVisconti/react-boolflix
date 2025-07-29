import { useMovieTv } from "../contexts/DeafaultContex"
import FilmRate from "../components/FilmRate"

export default function HomePage() {
    const { movieData, tvData } = useMovieTv()
    return (
        <>
            <div className="bg-secondary">
                <div className="container">
                    <div className="py-4">

                        {/* MOVIES */}

                        <div className="row mb-4 g-3">
                            <h1 className="text-light py-3">Movies</h1>
                            {movieData?.results?.map((element, index) => {
                                return (
                                    <div key={index} className="col-2">
                                        <div className="card text-bg-dark h-100">
                                            <img src={`https://image.tmdb.org/t/p/w342/${element.poster_path}`} className="card-img" alt={element.original_language} />
                                            <div className="card-img-overlay">
                                                <h5 className="card-title">{element.title.toUpperCase()}</h5>
                                                <h6 className="card-subtitle mb-2">{element.original_title}</h6>
                                                <img
                                                    src={`https://flagcdn.com/16x12/${element.original_language}.png`}
                                                    width="16"
                                                    height="12"
                                                    alt={element.original_language} />
                                                <div className="d-flex">
                                                    {<FilmRate element={element} />}

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>

                        {/* SERIES */}
                        <div className="row g-3">
                            <h1 className="text-light py-3"> TV</h1>
                            {tvData?.results?.map((element, index) => {
                                return (
                                    <div key={index} className="col-2">
                                        <div className="card text-bg-dark h-100">
                                            <img src={`https://image.tmdb.org/t/p/w342/${element.poster_path}`} className="card-img" alt={element.original_language} />
                                            <div className="card-img-overlay">
                                                <h5 className="card-title">{element.name.toUpperCase()}</h5>
                                                <h6 className="card-subtitle mb-2 ">{element.original_name}</h6>
                                                <img
                                                    src={`https://flagcdn.com/16x12/${element.original_language}.png`}
                                                    width="16"
                                                    height="12"
                                                    alt={element.original_language} />
                                                <p className="card-text">{element.vote_average}</p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div >
            </div>

        </>

    )
}