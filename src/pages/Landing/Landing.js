import { useState, useEffect } from "react";
import MovieBox from "../../components/MovieBox/MovieBox";
import Header from "../../components/Header/Header";
import { getMovies, searchMovie } from "../../services/get";
import './Landing.css';

const Landing = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const functionGet=()=>{getMovies().then((movies) => setMovies(movies));}
  useEffect(() => {
    functionGet()
  }, []);
  const search = (e) => {
    e.preventDefault();
    searchMovie(query).then((movies) => setMovies(movies));
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  const home=()=>{functionGet()}

  return (
    <div>
      <Header value={query}
	   onSubmit={search} 
	   onChange={changeHandler} 
	   onClickApp={home}
     valueApp={movies}
    />

      {movies.length > 0 ? (
        <div className="base ">
          <div className="grid ">
            {movies
              .filter((movie) => movie.poster_path && movie.backdrop_path)
              .map((movie) => (
                <MovieBox key={movie.id} {...movie} />
              ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h2>Sorry !! No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default Landing;
