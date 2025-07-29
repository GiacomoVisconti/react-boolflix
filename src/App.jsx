import { useState } from "react"
import ISO6391 from 'iso-639-1'

function App() {

  const [searchTitleMovie, setSearchMovieTitle] = useState(null)
  let url_movie = ''
  const [movieData, setMovieData] = useState(null)



  function onSearchClick() {
    let string = searchTitleMovie?.replace(" ", "+")

    url_movie = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${string}`


    fetch(url_movie)
      .then(res => res.json())
      .then(data => {
        setMovieData(data)


      })

    console.log(movieData);



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
        <div className="my-4">
          <div className="row g-3">
            {movieData?.results?.map((element, index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{element.title}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">{element.original_title}</h6>
                      <img
                        src={`https://flagcdn.com/16x12/${element.original_language}.png`}
                        width="16"
                        height="12"
                        alt={element.original_language} />
                      {/* <p className="card-text">{element.original_language}</p> */}
                      <p className="card-text">{element.vote_average}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
