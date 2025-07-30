import MovieCard from "./MovieCard"
import { useMovieTv } from "../../contexts/DeafaultContex"

export default function MovieList() {
    const { movieData } = useMovieTv()
    return (
        <div className="row mb-4 g-3">
            <h1 className="text-light py-3">Movies</h1>
            {movieData?.results?.map((element, index) => {
                return (
                    <MovieCard key={index} element={element} />

                )
            })}
        </div>
    )
}