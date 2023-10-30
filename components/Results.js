'use client';
import { useCallback, useEffect, useState } from 'react';
import getMovies from '../lib/getMovies';
import { useGlobalContext } from '../src/app/Context/store';
import Thumbnail from './Thumbnail';

function Results() {
  const { genre } = useGlobalContext();
  const [movies, setMovies] = useState([]);

  const getResults = useCallback(async () => {
    let { results } = await getMovies(genre);
    setMovies(results);
  }, [genre]);

  useEffect(() => {
    getResults();
  }, [genre, getResults]);
  return (
    <div className="flex-wrap justify-center px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {movies &&
        movies.map((result) => <Thumbnail key={result.id} result={result} />)}
    </div>
  );
}

export default Results;
