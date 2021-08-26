import { useCallback, useEffect, useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

function App() {
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const fetchMovies = useCallback(async () => {
    setError("");
    setMoviesLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
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
    } catch (error) {
      setError(error.message);
    } finally {
      setMoviesLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  function addMovie(movie) {
    console.log(movie);
  }

  let content = <p>Found no movies.</p>;
  if (error) {
    content = <p>{error}</p>;
  } else if (moviesLoading) {
    content = <p>Fetching movies...</p>;
  } else if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovie} />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
