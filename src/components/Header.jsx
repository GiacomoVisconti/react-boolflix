import { useState } from "react"
import { useMovieTv } from "../contexts/DeafaultContex"
import { Link } from "react-router-dom"

export default function Header() {
    const [searchTitle, setSearchTitle] = useState(null)
    const { onSearchClick } = useMovieTv()

    return (
        <header>
            <nav className="navbar bg-black">
                <div className="container-fluid">
                    <div className="d-flex">

                        <a className="navbar-brand">
                            <img src="BoolflixLogo.png" alt="logo" className="w-75" />
                        </a>
                        <ul className="navbar-nav d-flex flex-row gap-3 align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to={"/"}>Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to={"/movies"}>Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to={"/tv-series"}>Tv Series</Link>
                            </li>

                        </ul>
                    </div>


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
                        <button type="button" className="btn btn-danger" onClick={() => onSearchClick(searchTitle)}>
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    )

}