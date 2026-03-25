import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="md:mx-10 font-sans bg-indigo-600 rounded-2xl shadow-lg text-white mt-40">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 px-6 py-10 text-sm">
        <div>
          <img className="mb-5 w-40 rounded-xl shadow-md bg-white p-2" src={assets.logo} alt="PHC Logo" />
          <p className="w-full md:w-2/3 text-indigo-100 leading-6">
            PHC is committed to providing quality healthcare services. Our team of experts, including Dr. Aisha Patel, Dr. Liam Nguyen, and Dr. Emily Zhao, ensures you receive the best care possible.
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5">PHC</p>
          <ul className="flex flex-col gap-2 text-indigo-100">
            <li>
              <button className="transition-colors duration-200 hover:bg-indigo-700 px-3 py-1 rounded-lg">
                Home
              </button>
            </li>
            <li>
              <button className="transition-colors duration-200 hover:bg-indigo-700 px-3 py-1 rounded-lg">
                About us
              </button>
            </li>
            <li>
              <button className="transition-colors duration-200 hover:bg-indigo-700 px-3 py-1 rounded-lg">
                Delivery
              </button>
            </li>
            <li>
              <button className="transition-colors duration-200 hover:bg-indigo-700 px-3 py-1 rounded-lg">
                Privacy policy
              </button>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-indigo-100">
            <li>+1-212-456-7890</li>
            <li>contact@phc.com</li>
            <li>
              <span className="block mt-4 font-medium">Our Customers:</span>
              <ul className="ml-2 mt-2 space-y-1">
                <li>Sarah Lee</li>
                <li>John Carter</li>
                <li>Maria Gomez</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="border-indigo-400" />
        <p className="py-5 text-sm text-center text-indigo-100">
          Copyright 2024 @ PHC.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
