import React from 'react';
import 'animate.css';


const About = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 px-6 py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center animate__animated animate__fadeIn animate__delay-1s">
            About KeM Autos
          </h2>

          <p className="mt-6 text-lg text-center animate__animated animate__fadeIn animate__delay-2s">
            Welcome to KeM Autos, where passion meets excellence in the world of vehicles. We take pride in offering a diverse collection of high-quality cars, tailored to meet the needs of every driver. Whether you’re searching for style, performance, or functionality, our showroom is designed to help you find your perfect match.
          </p>

          <p className="mt-4 text-lg text-center animate__animated animate__fadeIn animate__delay-3s">
            With a commitment to exceptional service, KeM Autos is more than just a place to shop—it’s an experience. Our knowledgeable team is dedicated to guiding you every step of the way, ensuring a seamless journey from selection to ownership.
          </p>

          <p className="mt-4 text-lg text-center animate__animated animate__fadeIn animate__delay-4s">
            Discover the difference at KeM Autos, where your dream vehicle awaits!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
