import requests from '../utils/requests';

export default async function getMovies(genre) {
  let response = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );

  response = await response.json();

  return response;
}
