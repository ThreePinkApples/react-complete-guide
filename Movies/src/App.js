import { useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";

function App() {
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  async function fetchMovies() {
    setError("");
    setMoviesLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/film/");
      if (!response.ok) {
        throw new Error("Response error " + response.status);
      }
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
    } catch(error) {
      setError(error.message);
    } finally {
      setMoviesLoading(false);
    }
  }

  return (
    <>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {moviesLoading && <p>Fetching movies...</p>}
        {!moviesLoading && !error && <MoviesList movies={movies} />}
        {!moviesLoading && error && <p>{error}</p>}
      </section>
    </>
  );
}

export default App;
