
export default function FilmRate({ element }) {
    let voteTo5 = Math.round(element.vote_average / 2)


    {
        for (let i = 0; i < voteTo5; i++) {

            return (
                <i className="fa-solid fa-star"></i>
            )
        }

        for (let i = 0; i < (5 - voteTo5); i++) {

            return (
                <i className="fa-regular fa-star"></i>
            )
        }

    }



}