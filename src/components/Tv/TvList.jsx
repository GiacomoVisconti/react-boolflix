import TvCard from "./TvCard"
import { useMovieTv } from "../../contexts/DeafaultContex"

export default function TvList() {
    const { tvData, tvGenres } = useMovieTv()
    return (
        <div className="row g-3">
            <div className="d-flex align-items-center gap-3">

                <h1 className="text-light py-3">Tv Series</h1>
                <div>

                    <select className="form-select bg-dark text-light" aria-label="Default select example">
                        {tvGenres?.genres.map(({ name }, index) => {
                            return (

                                <option key={index} value={name}>{name}</option>
                            )
                        })}
                        {console.log(tvGenres)}
                    </select>
                </div>

            </div>
            <hr className="text-light" />
            {tvData?.results?.map((element, index) => {
                return (
                    <TvCard key={index} element={element} />

                )
            })}
        </div>
    )
}