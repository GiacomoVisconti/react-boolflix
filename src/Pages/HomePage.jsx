import MovieList from "../components/MoviesList"
import TvList from "../components/TvList"
import { useMovieTv } from "../contexts/DeafaultContex"


export default function HomePage() {
    const { movieData } = useMovieTv()
    return (
        <>
            <div className="bg-dark">
                <div className="container">
                    <div className="py-4">

                        {/* MOVIES */}
                        <MovieList />

                        {/* SERIES */}
                        <TvList />

                    </div>
                </div >
            </div>

        </>

    )
}