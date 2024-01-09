import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "../css/Movies.module.css";

function MovieRender({ id, coverImg, title, summary, genres }) {
  return (
    <div className={css.movie}>
      <img src={coverImg} alt={title} className={css.movie__img} />
      <div>
        <h2 className={css.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <hr />
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <hr />
        <ul className={css.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieRender.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieRender;
