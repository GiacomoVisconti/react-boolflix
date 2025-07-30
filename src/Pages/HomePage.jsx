import MovieList from "../components/Movie/MoviesList"
import TvList from "../components/Tv/TvList"
import { useMovieTv } from "../contexts/DeafaultContex"


export default function HomePage() {
    const { movieData } = useMovieTv()
    return (
        <>
            <div className="bg-dark">
                <div className="container">
                    <div className="py-4">





                    </div>
                </div >
            </div>

        </>

    )
}