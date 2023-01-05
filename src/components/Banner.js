import React, { useEffect } from "react";
import categories, { getMovie } from "../api";
import "./Banner.css"

function Banner() {
  const [movie, setMovies] = React.useState([]);

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find((category) => category.name === "trending");

      const data = await getMovie(netflixOriginalsCategory.path)
      const movies = data?.results;
      const randomMovie = Math.floor(Math.random() * data.results.length);

      setMovies(movies[randomMovie])
    } catch (error) {
      console.log("Banner fetchRandomMovie error: ", error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();

  }, [])

  function truncate(str,n){
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner-container" style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      roundPosition: "center-center",
    }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons-container">
          <button className="banner-button"> Assistir</button>
          <button className="banner-button">Minha Lista</button>
        </div>
        <div className="banner-description">
          <h2>{truncate(movie?.overview, 150)}</h2>
        </div>
      </div>
    </header>
  )
}

export default Banner;