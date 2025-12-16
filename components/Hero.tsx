import React from 'react';
import { PageView } from '../types';

interface HeroProps {
    setPage: (page: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://picsum.photos/id/1033/1600/900" 
          alt="Industrial Factory"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
          Advanced Insulation <br />
          <span className="text-brand-orange">Solutions</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Hangzhou Deyun Technology provides world-class industrial insulation, scaffolding, and painting services. We define safety, quality, and integrity in every project.
        </p>
        <div className="mt-10 max-w-sm sm:flex sm:max-w-none">
            <button 
                onClick={() => setPage(PageView.PRODUCTS)}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition shadow-lg"
            >
                View Products
            </button>
            <button 
                onClick={() => setPage(PageView.CONTACT)}
                className="mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 md:py-4 md:text-lg md:px-10 transition"
            >
                Contact Us
            </button>
        </div>
      </div>
    </div>
  );
};