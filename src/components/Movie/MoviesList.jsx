import MovieCard from "./MovieCard"
import { useMovieTv } from "../../contexts/DeafaultContex"

export default function MovieList() {
    const { movieData, movieGenres } = useMovieTv()
    return (
        <div className="row mb-4 g-3">
            <div className="d-flex align-items-center gap-3">

                <h1 className="text-light py-3">Movies</h1>
                <div>

                    <select className="form-select bg-dark text-light" aria-label="Default select example">
                        {movieGenres?.genres.map(({ name }, index) => {
                            return (

                                <option key={index} value={name}>{name}</option>
                            )
                        })}
                        {console.log(movieGenres)}
                    </select>
                </div>

            </div>
            <hr className="text-light" />
            {movieData?.results?.map((element, index) => {
                return (
                    <MovieCard key={index} element={element} />

                )
            })}
        </div>
    )
}