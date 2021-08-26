import { useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";

function App() {
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    setMoviesLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    setMovies(
      data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        };
      })
    );
    setMoviesLoading(false);
  }

  return (
    <>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {moviesLoading && <p>Fetching movies...</p>}
        {!moviesLoading && <MoviesList movies={movies} />}
      </section>
    </>
  );
}

export default App;
