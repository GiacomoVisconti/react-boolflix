import { useEffect } from "react"
import MovieCard from "../components/Movie/MovieCard"
import { useMovieTv } from "../contexts/DeafaultContex"



export default function HomePage() {

    const { popularMoviesData } = useMovieTv()




    return (
        <>
            <div className="bg-dark">
                <div className="container">
                    <div className="row g-3 pb-4">
                        <h1 className="text-light pt-4">Popular Movies</h1>
                        <hr className="text-light" />
                        {popularMoviesData?.results?.map((element, index) => {
                            return (
                                <MovieCard key={index} element={element} />

                            )
                        })}
                    </div>
                </div >
            </div>

        </>

    )
}