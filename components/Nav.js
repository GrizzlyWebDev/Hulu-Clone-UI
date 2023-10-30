'use client';

import requests from '../utils/requests';
import { useGlobalContext } from '../src/app/Context/store';

function Nav() {
  const { setGenre } = useGlobalContext();

  return (
    <nav className="relative">
      <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide">
        {Object.entries(requests)?.map(([key, { title, url }]) => (
          <h2
            key={key}
            className="transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-white active:text-red-500 last"
            onClick={() => {
              setGenre(key);
            }}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
