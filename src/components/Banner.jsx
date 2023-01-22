import React from 'react';

export default function Banner() {
  return (
    <section className="h-96 bg-black relative">
      <div className="w-full h-full bg-cover bg-banner bg-left-bottom opacity-80"></div>
      <div className="absolute w-full bottom-32 text-white text-center drop-shadow-2xl">
        <h2 className="text-6xl font-semibold">Code your desk</h2>
        <p className="text-2xl">Best Products for best developer</p>
      </div>
    </section>
  );
}
