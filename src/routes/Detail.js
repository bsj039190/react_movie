import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "../css/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [cover, setCover] = useState("");

  // CSS module을 이용하여 배경 이미지 스타일을 설정
  const backgroundStyle = {
    backgroundImage: `url(${movie.background_image})`,

    alignItems: "center",
    justifyContent: "center",
  };

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
    <div style={backgroundStyle} className={css.background}>
      <img src={cover} alt={cover} className={css.text} />
      <h2 className={css.text}>{movie.title}</h2>
      <ul className={css.genres_list}>
        <li className={css.genres}>
          {genres.map((g) => (
            <li key={g} className={css.genres_item}>
              {g}
            </li>
          ))}
        </li>
      </ul>
      <h3>
        {Array.from({ length: movie.rating }, (_, index) => "⭐").join("")}
      </h3>
    </div>
  );
}

export default Detail;
