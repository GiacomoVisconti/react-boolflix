import FilmRate from "../FilmRate"
import { Link } from "react-router-dom"

export default function TvCard({ element }) {
    return (
        <div className="col-3">
            <Link to={`/tv/${element.id}`}>

                <div className="card text-bg-dark h-100">
                    <img src={`https://image.tmdb.org/t/p/w342/${element.poster_path}`} className="card-img" alt={element.original_language} />
                    <div className="card-img-overlay fs-6 g-0 ">
                        <div>Titolo: <b className="card-title">{element.name.toUpperCase()}</b></div>
                        <div>Titolo Originale: <b className="card-subtitle mb-2">{element.original_name}</b></div>
                        <img className="img_card"
                            src={`https://flagcdn.com/16x12/${element.original_language}.png`}
                            width="16"
                            height="12"
                            alt={element.original_language} />
                        <div className="d-flex"> Voto:
                            <div className="d-flex">
                                {<FilmRate element={element} />}

                            </div>
                        </div>
                        <div>
                            Overview: <p className="fs-6">{element.overview}</p>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    )
}