import { atom } from "recoil";

export const isAppLoadingState = atom({
  key: "isAppLoadingState",
  default: false,
});

export const MovieDataError = atom({
  key: "MovieDataError",
  default: "",
});

export const SeriesDataError = atom({
  key: "SeriesDataError",
  default: "",
});
