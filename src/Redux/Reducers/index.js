import {
  AUTHENTICATED,
  MOVIES,
  MOVIE,
  TRENDING,
  SHOWS,
  GENRES,
  SPLASH_IMAGE,
  IMAGE_DETAILS,
} from "../Actions";

const initialState = {
  authenticated: false,
  logo: `https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`,
  baseUrl: "https://image.tmdb.org/t/p/original/",
  movies: [],
  trending: [],
  shows: [],
  genres: [],
  splashImage: "",
  imageDetails: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: action.value,
      };
    case MOVIES:
      return {
        ...state,
        movies: action.value,
      };
    case MOVIE:
      return {
        ...state,
        selectedMovie: action.value,
      };
    case TRENDING:
      return {
        ...state,
        trending: action.value,
      };
    case SHOWS:
      return {
        ...state,
        shows: action.value,
      };
    case GENRES:
      return {
        ...state,
        genres: action.value,
      };
    case SPLASH_IMAGE:
      return {
        ...state,
        splashImage: action.value,
      };
    case IMAGE_DETAILS:
      return {
        ...state,
        imageDetails: action.value,
      };
    default:
      return state;
  }
};

export default Reducer;
