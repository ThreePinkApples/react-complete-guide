import { useCallback, useEffect, useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

function App() {
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const firebaseUrl =
    "https://udemyreactmovies-default-rtdb.europe-west1.firebasedatabase.app";

  const fetchMovies = useCallback(async () => {
    setError("");
    setMoviesLoading(true);
    try {
      const response = await fetch(firebaseUrl + "/movies.json");
      if (!response.ok) {
        throw new Error("Response error " + response.status);
      }
      const data = await response.json();
      const mappedMovies = Object.keys(data).map((key) => {
        return {
          id: key,
          title: data[key].title,
          releaseDate: new Date(data[key].releaseDate),
          openingText: data[key].openingText,
        };
      });
      setMovies(mappedMovies.sort((a, b) => b.releaseDate - a.releaseDate));
    } catch (error) {
      setError(error.message);
    } finally {
      setMoviesLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  async function addMovie(movie) {
    const response = await fetch(firebaseUrl + "/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
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
