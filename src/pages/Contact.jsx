import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <div className="text-center text-3xl pt-12 text-indigo-600 font-bold tracking-wide">
        <p>
          CONTACT <span className="text-gray-900 font-extrabold">PHC</span>
        </p>
      </div>

      <div className="my-12 flex flex-col md:flex-row justify-center items-center gap-12 mb-32 px-4">
        <img
          className="w-full md:max-w-[380px] rounded-2xl shadow-lg"
          src={assets.contact_image}
          alt="Contact PHC"
        />
        <div className="flex flex-col justify-center items-start gap-8 bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <p className="font-semibold text-xl text-indigo-600">OUR OFFICE</p>
          <p className="text-gray-700">
          123 St <br /> Melbourne, Australia
          </p>
          <p className="text-gray-700">
            Tel: (415) 555-0132 <br /> Email: phcinfo@gmail.com
          </p>
          <p className="font-semibold text-xl text-indigo-600">CAREERS AT PHC</p>
          <p className="text-gray-700">
            Learn more about our teams and job openings.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact
