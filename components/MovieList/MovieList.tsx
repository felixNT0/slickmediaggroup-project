import { Typography } from "antd";
import Carousel from "better-react-carousel";
import { useRecoilValue } from "recoil";
import { isAppLoadingState } from "../../libs/loadingState";
import { MoviesType } from "../../types/movie";
import { responsiveLayout } from "../../utils/responsiveCarousel";
import { fakeMovies } from "../FakeDatas/FakeMovieData";
import MovieCard from "../MovieCard/MovieCard";
import SkeletonMovieCard from "../MovieCard/SkeletonMovieCard";
import styles from "./MovieList.module.css";

function MovieList({
  data,
  movieType,
  error,
}: {
  data: MoviesType[];
  movieType: string;
  error?: string;
}) {
  const appLoadingState = useRecoilValue<boolean>(isAppLoadingState);

  return (
    <div className={styles.movie_card_container}>
      <Typography.Title className={styles.movie_type_title}>
        {movieType}
      </Typography.Title>
      <Typography.Title className={styles.error_type_title}>
        {error}
      </Typography.Title>
      {appLoadingState && (
        <Carousel responsiveLayout={responsiveLayout}>
          {fakeMovies?.map((res: MoviesType, index: number) => (
            <Carousel.Item key={index}>
              <SkeletonMovieCard />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      {!appLoadingState && (
        <Carousel
          responsiveLayout={responsiveLayout}
          hideArrow={error ? true : false}
        >
          {data?.map((res: MoviesType, index: number) => (
            <Carousel.Item key={index}>
              <MovieCard
                id={res.imdbID}
                title={res.Title}
                description={res.Year}
                imageUrl={res.Poster}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default MovieList;
