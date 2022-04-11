const KEY_API='98300ceed5425e19dee70a74196442b3'
const API_URL =`https://api.themoviedb.org/3/movie/popular?api_key=${KEY_API}`;
const QUERY_URL=`https://api.themoviedb.org/3/search/multi?api_key=${KEY_API}`;
export const getMovies = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.results;
};

export const searchMovie = async (query) => {
  const url = `${QUERY_URL}&query=${query}`;
  const res = await fetch(`${query ? url : API_URL}`);
  const data = await res.json();
  

  return data.results;
};
