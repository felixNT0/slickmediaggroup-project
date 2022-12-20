import { useRouter } from "next/router";
import { useQuery } from "react-query";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import MainMovieDetail from "../../components/Movie/MainMovieDetail";
import NavBar from "../../components/NavBar/NavBar";
import { getMovieById } from "../../components/queries/queries";

function MovieDetails() {
  const router = useRouter();

  const id: string = router?.query?.id as string;

  const { data, isLoading } = useQuery(
    ["movie-by-id", id],
    () => getMovieById(id),
    {
      enabled: !!id,
    }
  );

  console.log(data);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <NavBar />
      <MainMovieDetail {...data} />
    </>
  );
}

export default MovieDetails;
