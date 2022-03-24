import { Container, Button, Box, Grid, TextField, Typography, Input } from "@mui/material";
import { useEffect, useState } from "react";
// import "../css/main.css";
import MovieList from "./MovieList";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';

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
    searchMovies("superman");
  }, []);

  console.log(searchTerm);
  console.log(searchMovies);
  console.log(movies);

  return (
    <main style={{ backgroundColor: "#EFEFEF" }}>
      <Container maxWidth="sm">
        <Grid columnSpacing={2} rowSpacing={2} pt={10} pb={5} container justifyContent="center" alignItems="center">
          <Grid item md={12} sm={12} xs={12} mb={4}>
            <Typography variant="h3" align="center">The World of Movies</Typography>
          </Grid>
          <Grid item md={9} sm={9} xs={12}>
            <Box component="form">
              <Input
                fullWidth
                size="small"
                id="outlined-name"
                label="Search for movies"
                value={searchTerm}
                type="text"
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                }}
                onKeyPress={(e) => {
                  if(e.key === "Enter") {
                    searchMovies(searchTerm)
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item md={3} sm={3} xs={6}>
            <Button size="medium" fullWidth variant="contained" endIcon={<SearchIcon />}  sx={{ backgroundColor: "#323438", color: "#F6E0A4" }} onClick={() => {
                searchMovies(searchTerm) 
              }}>Search
            </Button>
          </Grid>
        </Grid>
      </Container>

        {movies?.length > 0 
        ?
          (   
            <Container maxWidth="md">
              <Grid container spacing={6} p={4} justifyContent="center">
                {movies.map((movie) => (<MovieList key={movie.Title} movie={movie} /> ))}
              </Grid>
            </Container>
          ) 
          : 
          (
            <Container maxWidth="sm">
              <Alert severity="error">Movies Not Found!</Alert>
            </Container>
          )
        }
    </main>
  )
}

{/* <input
  placeholder="Search for movies"
  value={searchTerm}
  onChange={(e)=> {
    setSearchTerm(e.target.value)
  }}
/>
<img
  src="img/search.svg"
  alt="search icon"
  onClick={() => {
    searchMovies(searchTerm) 
  }}
  /> */}