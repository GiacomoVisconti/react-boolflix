import TvCard from "./TvCard"
import { useMovieTv } from "../contexts/DeafaultContex"

export default function TvList() {
    const { tvData } = useMovieTv()
    return (
        <div className="row g-3">
            <h1 className="text-light py-3"> TV</h1>
            {tvData?.results?.map((element, index) => {
                return (
                    <TvCard key={index} element={element} />

                )
            })}
        </div>
    )
}