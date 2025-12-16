import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold tracking-wider mb-4">DE YUN TECHNOLOGY</h3>
            <p className="text-gray-400 max-w-sm">
                A leading provider of industrial insulation, scaffolding, and coating services. Committed to safety, quality, and performance for over 15 years.
            </p>
            <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fa-brands fa-linkedin text-2xl"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fa-brands fa-facebook text-2xl"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fa-brands fa-twitter text-2xl"></i></a>
            </div>
        </div>
        <div>
            <h4 className="text-lg font-bold mb-4 text-brand-orange">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Products</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Sitemap</a></li>
            </ul>
        </div>
        <div>
            <h4 className="text-lg font-bold mb-4 text-brand-orange">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                    <i className="fa-solid fa-location-dot mt-1 mr-3"></i>
                    <span>123 Industry Road<br/>Hangzhou, Zhejiang, China</span>
                </li>
                <li className="flex items-center">
                    <i className="fa-solid fa-phone mr-3"></i>
                    <span>+86 571 1234 5678</span>
                </li>
                <li className="flex items-center">
                    <i className="fa-solid fa-envelope mr-3"></i>
                    <span>sales@hz-deyun.com</span>
                </li>
            </ul>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Hangzhou Deyun Technology Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};