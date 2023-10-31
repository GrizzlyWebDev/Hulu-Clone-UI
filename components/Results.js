'use client';
import { useCallback, useEffect, useState } from 'react';
import getMovies from '../lib/getMovies';
import { useGlobalContext } from '../src/app/Context/store';
import Thumbnail from './Thumbnail';
import CardLoader from './CardLoader';

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
    <div className="grid flex-wrap justify-center px-5 my-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {movies.length > 0
        ? movies.map((result) => <Thumbnail key={result.id} result={result} />)
        : new Array(15).fill(0).map((_, i) => <CardLoader key={i} />)}
    </div>
  );
}

export default Results;
