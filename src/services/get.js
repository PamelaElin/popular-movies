const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=98300ceed5425e19dee70a74196442b3";

export const getMovies = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.results;
};

export const searchMovie = async (query) => {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=98300ceed5425e19dee70a74196442b3&query=${query}`;
  const res = await fetch(`${query ? url : API_URL}`);
  const data = await res.json();
  

  return data.results;
};
