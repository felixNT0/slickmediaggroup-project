import http from "../../libs/http";

export const getAllMovies = (searchQuery: string) => {
  return http.get(
    `/?s=${searchQuery}&}&type=movie&apikey=${process.env.NEXT_PUBLIC_OMDBAPIKEY}`
  );
};

export const getAllSeriesMovies = (searchQuery: string) => {
  return http.get(
    `/?s=${searchQuery}&type=series&apikey=${process.env.NEXT_PUBLIC_OMDBAPIKEY}`
  );
};

export const getMovieById = (id: string) => {
  return http.get(`/?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDBAPIKEY}`);
};
