import { useState } from "react"
import { useMovieTv } from "../contexts/DeafaultContex"

export default function Header() {
    const [searchTitle, setSearchTitle] = useState(null)
    const { onSearchClick } = useMovieTv()

    return (
        <header>
            <nav className="navbar bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src="BoolflixLogo.png" alt="logo" className="w-75" />
                    </a>
                    <form className="d-flex gap-2" role="search">
                        <input
                            type="text"
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="helpId"
                            placeholder="Insert a movie title to search"
                            onChange={(e) => setSearchTitle(e.target.value)}
                        />
                        <button type="button" className="btn btn-primary" onClick={() => onSearchClick(searchTitle)}>
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    )

}