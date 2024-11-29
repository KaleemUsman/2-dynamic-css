import React from 'react';
import 'animate.css'

const HomeContent = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/main.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white px-6 py-12 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center animate__animated animate__fadeIn">Welcome To Our Autos</h1>
          <p className="mt-4 text-lg text-center animate__animated animate__fadeIn animate__delay-1s">
            Explore a curated selection of premium vehicles.
          </p>
          <button className="mt-6 px-8 py-3 bg-yellow-500 text-white text-lg rounded-full hover:bg-yellow-600 transition duration-300">
            Visit Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
