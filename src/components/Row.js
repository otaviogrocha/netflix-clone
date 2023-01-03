import React, { useEffect } from "react";

function Row({title, path}) {
  const [movies, setMovies] = React.useState([]);

  const fetchMovies = async (_path) =>{
    try {
        const data = await (_path);
        console.log("data ", data)
        setMovies(data?.results);
    } catch (error) {
        console.log("FetchMovies error: ", error)
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path])
  

  return (
    <div className = "row-container">
        <h2 className="row-header">{title}</h2>
        <div className="row-cards">
            {movies?.map(movie =>{
                
            })}
        </div>
    </div>
  );
}

export default Row