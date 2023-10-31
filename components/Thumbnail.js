'use client';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef, useState } from 'react';
import ImgLoader from './ImgLoader';

const Thumbnail = forwardRef(({ result }, ref) => {
  const [loading, setLoading] = useState(true);
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div
      ref={ref}
      className="w-full h-full p-2 transition duration-200 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-50"
    >
      <div className="relative">
        <Image
          className="relative z-1"
          alt="movie poster image"
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          onLoad={() => setLoading(false)}
          height={1080}
          width={1920}
        />
        {loading && <ImgLoader />}
      </div>
      <div className="p-2">
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-semibold">
          {result.title || result.original_name}
        </h2>
        <p className="max-w-md truncate">{result.overview}</p>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{' '}
          {result.release_date || result.first_air_date} •{' '}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

Thumbnail.displayName = 'Thumbnail';
export default Thumbnail;
