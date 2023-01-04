import React, {useEffect } from "react";
import categories, { getMovies } from "../api";
import "./Banner.css"

function Banner(){
    const [movie, setMovies] = React.useState([]);
      
    const fetchRandomMovie = async () => {
      try {
        const  netflixOriginalsCategory = categories.find((category) => category.name === "trending");
        
        const data = await getMovies(netflixOriginalsCategory.path)
        const movies = data?.results;
        const randomMovie = Math.floor(Math.random() * data.results.length);

        setMovies(movies[randomMovie])
      } catch (error) {
        console.log("Banner fetchRandomMovie error: ", error);
      }
    };
      
    useEffect(() => {
        fetchRandomMovie();

    }, [path])
      
    return(
        <div>Banner</div>
    )
}

export default Banner;