import React from 'react';
import 'animate.css';

const Services = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: "url('/services.jpg')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 px-6 py-12">
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Our Services at KeM Autos
            </h2>

            <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
              <strong>Vehicle Sales:</strong> Explore a wide range of high-quality cars, from luxury to everyday models, designed to suit your lifestyle and budget.
            </p>

            <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-3s">
              <strong>Personalized Consultations:</strong> Our expert team helps you make informed decisions, ensuring you drive away with the perfect vehicle.
            </p>

            <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-4s">
              <strong>Financing Solutions:</strong> Flexible financing options tailored to make owning your dream car easier than ever.
            </p>

            <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-5s">
              <strong>Maintenance & Repairs:</strong> Keep your vehicle in top condition with our trusted maintenance and repair services.
            </p>

            <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-6s">
              <strong>Trade-Ins:</strong> Upgrade your ride by trading in your current vehicle for a great value.
            </p>

            <p className="text-lg animate__animated animate__fadeIn animate__delay-7s">
              At KeM Autos, we prioritize your satisfaction, ensuring every service is delivered with professionalism and care. Visit us and experience automotive excellence!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
