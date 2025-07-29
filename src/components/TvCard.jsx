import FilmRate from "./FilmRate"

export default function TvCard({ element }) {
    return (
        <div className="col-2">
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
                    <div className="d-flex">
                        {<FilmRate element={element} />}

                    </div>
                </div>
            </div>
        </div>
    )
}