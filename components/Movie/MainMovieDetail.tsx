import { StarFilled } from "@ant-design/icons";
import { MoviesByIdType } from "../../types/movieById";
import styles from "./Movie.module.css";

function MainMovieDetail(props: MoviesByIdType) {
  return (
    <div className={styles.movie}>
      <div className={styles.movie__intro}>
        <img className={styles.movie__backdrop} src={props.Poster} />
      </div>
      <div className={styles.movie__detail}>
        <div className={styles.movie__detailLeft}>
          <div className={styles.movie__posterBox}>
            <img className={styles.movie__poster} src={props.Poster} />
          </div>
        </div>
        <div className={styles.movie__detailRight}>
          <div className={styles.movie__detailRightTop}>
            <div className={styles.movie__name}>{props.Title}</div>
            <div className={styles.movie__rating}>
              {props.imdbRating}
              <StarFilled />
              <span className={styles.movie__voteCount}>
                {`(${props.imdbVotes})` + " " + "votes"}
              </span>
            </div>
            <div className={styles.movie__runtime}>{props.Runtime}</div>
            <div className={styles.movie__releaseDate}>
              Released Year: {props.Released}
            </div>
            <div className={styles.movie__releaseDate}>
              Language: {props.Language}
            </div>
            <div className={styles.movie__releaseDate}>Type: {props.Type}</div>
            <div className={styles.movie__releaseDate}>
              Writer: {props.Writer}
            </div>
            <div className={styles.movie__genres}>
              {[props.Genre].map((genre) => (
                <>
                  <span className={styles.movie__genre} id={genre}>
                    {genre}
                  </span>
                </>
              ))}
            </div>
          </div>
          <div className={styles.movie__detailRightBottom}>
            <div className={styles.synopsisText}>Synopsis</div>
            <div>{props.Plot}</div>
          </div>
        </div>
      </div>
      {/* <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div> */}
      {/* <div className="movie__heading">Production companies</div>
      <div className="movie__production">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div> */}
    </div>
  );
}

export default MainMovieDetail;
