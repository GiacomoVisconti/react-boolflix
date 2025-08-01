export default function FilmRate({ element }) {
    let voteTo5 = Math.round(element.vote_average / 2)

    return (
        <div>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                    {i < Math.round(voteTo5) ? (
                        <i className="fa-solid fa-star text-warning"></i>
                    ) : (
                        <i className="fa-regular fa-star text-warning"></i>
                    )}
                </span>
            ))}
        </div>
    )


}