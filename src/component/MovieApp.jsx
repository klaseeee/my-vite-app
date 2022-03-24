import { useEffect, useState } from "react";
import "../css/main.css";
import MovieList from "./MovieList";
// import SearchIcon from "public/img/search.svg";

//4f924cfb

// const API_URL = "http://www.omdbapi.com/?apikey=4f924cfb";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=4f924cfb";

export default function MovieApp() {
  const[movies, setMovies] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

   setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  console.log(searchTerm);
  console.log(searchMovies);
  console.log(movies);

  const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
  }

  return (
    <div className="app">
        <h1>The World of Movies</h1>
        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
          />
          <img
            src="img/search.svg"
            alt="search icon"
            onClick={()=> searchMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 
        ?
          (
            <div className="container">
              {movies.map((movie) => (<MovieList movie={movie} /> ))}
            </div>
          ) 
          : 
          (
            <div className="empty">
              <h2>Movies Not Found!</h2>
            </div>
          )
        }
    </div>
  )
}
