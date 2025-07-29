import { useState } from "react"

function App() {

  const [searchTitleMovie, setSearchMovieTitle] = useState(null)
  let url_movie = ''
  const [movieData, setMovieData] = useState(null)


  function onSearchClick() {
    let string = searchTitleMovie?.replace(" ", "+")
    console.log(string);
    url_movie = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${string}`
    console.log(url_movie);

    fetch(url_movie)
      .then(res => res.json())
      .then(data => {
        setMovieData(data)
        console.log(data);

      })


  }





  return (
    <>
      <div className="container">
        <h1>Search Movie</h1>
        <form>
          <div className="">
            <div className="mb-3 ">

              <label htmlFor="movie_title_input" className="form-label">MOVIE TITLE</label>
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Insert a movie title to search"
                onChange={(e) => setSearchMovieTitle(e.target.value)}
              />
            </div>
            <div className="">

              <button type="button" className="btn btn-primary" onClick={onSearchClick}>
                Search
              </button>
            </div>


          </div>

        </form>
      </div>
    </>
  )
}

export default App
