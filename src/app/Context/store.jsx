'use client';
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
  genre: '',
  setGenre: () => '',
});

export default function GlobalContextProvider({ children }) {
  const [genre, setGenre] = useState('');
  return (
    <GlobalContext.Provider value={{ genre, setGenre }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
