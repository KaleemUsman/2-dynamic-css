import React from 'react';
import 'animate.css';


const Contact = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: "url('/contact.jpeg')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <form className="w-full max-w-lg px-6 py-8 bg-white bg-opacity-75 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 animate__animated animate__fadeIn">
              Get in Touch with KeM Autos
            </h2>

            <fieldset className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              />
              <input
                type="text"
                placeholder="Contact Number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              />
              <textarea
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                SUBMIT
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
