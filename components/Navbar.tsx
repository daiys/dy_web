import React, { useState } from 'react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  setPage: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', value: PageView.HOME },
    { label: 'ABOUT US', value: PageView.ABOUT },
    { label: 'PRODUCTS', value: PageView.PRODUCTS },
    { label: 'PROJECTS', value: PageView.CASES },
    { label: 'NEWS', value: PageView.NEWS },
    { label: 'CONTACT', value: PageView.CONTACT },
  ];

  return (
    <div className="flex flex-col w-full z-50 sticky top-0">
      {/* Top Info Bar */}
      <div className="bg-gray-100 border-b border-gray-200 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-gray-600">
          <div className="flex space-x-6">
            <span className="flex items-center"><i className="fa-solid fa-phone mr-2 text-brand-orange"></i> +86 571 8888 9999</span>
            <span className="flex items-center"><i className="fa-solid fa-envelope mr-2 text-brand-orange"></i> sales@hz-deyun.com</span>
            <span className="flex items-center"><i className="fa-solid fa-clock mr-2 text-brand-orange"></i> Mon - Fri: 9:00 - 18:00</span>
          </div>
          <div className="flex items-center space-x-4">
             <a href="#" className="hover:text-brand-orange">CN</a>
             <span>|</span>
             <a href="#" className="text-brand-orange font-bold">EN</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-brand-dark text-white shadow-xl border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => setPage(PageView.HOME)}>
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="bg-brand-orange text-white font-bold p-2 rounded text-2xl">DY</div>
                <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-wider leading-none">DE YUN</span>
                    <span className="text-[10px] text-gray-400 tracking-[0.2em] leading-none">TECHNOLOGY</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setPage(item.value)}
                  className={`px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors duration-200 ${
                    currentPage === item.value ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-6 w-px bg-gray-600 mx-2"></div>
              <button
                 onClick={() => setPage(PageView.ADMIN)}
                 className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-solid fa-lock"></i>
                <span>ADMIN</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
                <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setPage(item.value);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 border-b border-gray-800"
                >
                  {item.label}
                </button>
              ))}
               <button
                  onClick={() => {
                    setPage(PageView.ADMIN);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-brand-orange hover:bg-gray-700"
                >
                  ADMIN PANEL
                </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};