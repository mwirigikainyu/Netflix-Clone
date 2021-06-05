export const AUTHENTICATED = "AUTHENTICATED";
export const MOVIES = "MOVIES";
export const MOVIE = "MOVIE";
export const GENRES = "GENRES";
export const TRENDING = "TRENDING";
export const SHOWS = "SHOWS";
export const SPLASH_IMAGE = "SPLASH_IMAGE";
export const IMAGE_DETAILS = "IMAGE_DETAILS";

export const loggedIn = (bool) => {
  return {
    type: AUTHENTICATED,
    value: bool,
  };
};

export const saveMovies = (movies) => {
  return {
    type: MOVIES,
    value: movies,
  };
};

export const saveMovie = (movie) => {
  return {
    type: MOVIE,
    value: movie,
  };
};

export const saveGenres = (genre) => {
  return {
    type: GENRES,
    value: genre,
  };
};

export const saveTrending = (trending) => {
  return {
    type: TRENDING,
    value: trending,
  };
};

export const saveShows = (shows) => {
  return {
    type: SHOWS,
    value: shows,
  };
};

export const saveSplashImage = (splashImage) => {
  return {
    type: SPLASH_IMAGE,
    value: splashImage,
  };
};

export const saveImageDetails = (imageDetails) => {
  return {
    type: IMAGE_DETAILS,
    value: imageDetails,
  };
};
