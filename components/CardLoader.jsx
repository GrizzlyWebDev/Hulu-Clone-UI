import React from 'react';

export default function CardLoader() {
  return (
    <div className="w-full h-full p-2">
      <div className="w-full h-[40vh] animate-pulse bg-slate-600" />
      <div className="pt-2">
        <div className="w-full h-4 mt-2 animate-pulse bg-slate-600 rounded-3xl" />
        <div className="w-full h-3 mt-1 animate-pulse bg-slate-600 rounded-3xl" />
      </div>
    </div>
  );
}
