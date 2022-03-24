import { MovieOutlined } from "@mui/icons-material";
import { CssBaseline } from "@mui/material";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import MovieApp from "./components/MovieApp";
// import MovieOutlined from '@mui/icons-material/MovieOutlined';

const MainPage = () => {
  return (
    <div className="main-page">
      <CssBaseline/>
      <Navbar 
        bgColor="#323438"
        color="#F6E0A4"
        navbarTitle="Movies"
        navbarIcon={<MovieOutlined sx={{color:"#F6E0A4"}}/>}
      />
      <MovieApp/>
      <Footer
        footerbgColor="#323438"
        footerColor="#F6E0A4"
        footerTitle="Movies"
      />
    </div>
  )
}

export default MainPage;