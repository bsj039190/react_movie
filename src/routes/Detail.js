import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [cover, setCover] = useState("");

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();

    const movieData = json.data.movie;
    setMovie(movieData);
    setGenres(json.data.movie.genres);
    setCover(json.data.movie.medium_cover_image);
    console.log(movieData);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <img src={movie.background_image} alt="background" />
      <img src={cover} alt={cover} />
      <h2>{movie.title}</h2>
      <ul>
        <li>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </li>
      </ul>
      <h3>Rating : {movie.rating}</h3>
    </div>
  );
}

export default Detail;
