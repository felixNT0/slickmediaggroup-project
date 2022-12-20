import { Input, Typography } from "antd";
import debounce from "lodash/debounce";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import BodyImage from "../components/BodyImage/BodyImage";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import MovieList from "../components/MovieList/MovieList";
import NavBar from "../components/NavBar/NavBar";
import {
  getAllMovies,
  getAllSeriesMovies,
} from "../components/queries/queries";
import {
  isAppLoadingState,
  MovieDataError,
  SeriesDataError,
} from "../libs/loadingState";
import styles from "../styles/Home.module.css";

export default function Home() {
  const setAppLoadingState = useSetRecoilState<boolean>(isAppLoadingState);

  const [loadAppFirstScreen, setLoadAppFirstScreen] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>("new");

  const [movieError, setMovieError] = useRecoilState<string>(MovieDataError);

  const [seriesError, setSeriesError] = useRecoilState<string>(SeriesDataError);

  const { data: movies, isLoading: moviesLoadingState } = useQuery(
    ["all-movies", searchValue],
    () => getAllMovies(searchValue)
  );
  const { data: series, isLoading: seriesLoadingState } = useQuery(
    ["all-series-movies", searchValue],
    () => getAllSeriesMovies(searchValue)
  );

  const handleChangeSearchInput = (event: any) => {
    if (event.target.value === "") {
      setSearchValue("new");
    } else {
      setSearchValue(event.target.value);
    }
  };

  const handleSearch = debounce(handleChangeSearchInput, 500);

  useEffect(() => {
    setLoadAppFirstScreen(true);
    setTimeout(() => setLoadAppFirstScreen(false), 3000);
  }, []);

  useEffect(() => {
    setAppLoadingState(moviesLoadingState || seriesLoadingState);
  }, [seriesLoadingState, moviesLoadingState]);

  useEffect(() => {
    if (movies) {
      setMovieError(movies.Error);
    }
    if (series) {
      setSeriesError(series.Error);
    }
  }, [movies, series]);

  return (
    <>
      {loadAppFirstScreen ? (
        <LoadingScreen />
      ) : (
        <div className={styles.main_container}>
          <NavBar />
          <BodyImage />
          <div className={styles.search_container}>
            <Typography.Text className={styles.search_text}>
              Search
            </Typography.Text>
            <Input
              size="large"
              placeholder="Search For Movie Here..."
              onChange={handleSearch}
            />
          </div>
          <div className={styles.movies_list_container}>
            <MovieList
              data={movies?.Search}
              movieType="Movie"
              error={movieError}
            />
            <MovieList
              data={series?.Search}
              movieType="Series"
              error={seriesError}
            />
          </div>
        </div>
      )}
    </>
  );
}
