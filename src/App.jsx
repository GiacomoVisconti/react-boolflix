import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { MovieTvProvider } from "./contexts/DeafaultContex";
import './index.css'
import SingleMovie from "./Pages/SingleMovie";
import SingleTv from "./Pages/SingleTv";

function App() {

  return (
    <MovieTvProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movie/:id" Component={SingleMovie} />
            <Route path="/tv/:id" Component={SingleTv} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MovieTvProvider>
  )
}

export default App
