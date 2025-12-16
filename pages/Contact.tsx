import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       {/* Banner */}
       <div className="relative h-64 bg-brand-dark flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
               <img src="https://picsum.photos/id/1019/1600/600" className="w-full h-full object-cover opacity-20" alt="Map bg" />
          </div>
          <div className="relative z-10 text-center text-white">
              <h1 className="text-4xl font-bold tracking-wider mb-2">CONTACT US</h1>
              <p className="text-gray-300">We are here to help with your insulation requirements</p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Contact Info */}
              <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  <p className="text-gray-600 mb-8">
                      Interested in our products or need a custom solution? Fill out the form or contact us directly using the information below.
                  </p>
                  
                  <div className="space-y-6">
                      <div className="flex items-start">
                          <div className="flex-shrink-0 bg-brand-orange text-white p-3 rounded-lg">
                              <i className="fa-solid fa-location-dot text-xl"></i>
                          </div>
                          <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">Head Office</h3>
                              <p className="text-gray-500">No. 123, Industry Avenue, Xiaoshan District<br/>Hangzhou, Zhejiang Province, China 311200</p>
                          </div>
                      </div>

                      <div className="flex items-start">
                          <div className="flex-shrink-0 bg-brand-orange text-white p-3 rounded-lg">
                              <i className="fa-solid fa-phone text-xl"></i>
                          </div>
                          <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">Phone & Fax</h3>
                              <p className="text-gray-500">Tel: +86 571 8888 9999</p>
                              <p className="text-gray-500">Fax: +86 571 8888 9998</p>
                          </div>
                      </div>

                      <div className="flex items-start">
                          <div className="flex-shrink-0 bg-brand-orange text-white p-3 rounded-lg">
                              <i className="fa-solid fa-envelope text-xl"></i>
                          </div>
                          <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">Email</h3>
                              <p className="text-gray-500">General: info@hz-deyun.com</p>
                              <p className="text-gray-500">Sales: sales@hz-deyun.com</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-brand-orange">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <form>
                      <div className="grid grid-cols-1 gap-6">
                          <div>
                              <label className="block text-sm font-medium text-gray-700">Full Name</label>
                              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-brand-orange focus:ring-brand-orange" />
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-700">Email Address</label>
                              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-brand-orange focus:ring-brand-orange" />
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-700">Subject</label>
                              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-brand-orange focus:ring-brand-orange" />
                          </div>
                          <div>
                              <label className="block text-sm font-medium text-gray-700">Message</label>
                              <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 border focus:border-brand-orange focus:ring-brand-orange"></textarea>
                          </div>
                          <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-4 rounded hover:bg-orange-700 transition">
                              SEND MESSAGE
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="h-96 w-full bg-gray-300 relative">
          <img src="https://picsum.photos/id/10/1600/800" className="w-full h-full object-cover grayscale opacity-50" alt="Map Location" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white p-4 rounded shadow-lg flex items-center gap-2">
                 <i className="fa-solid fa-location-dot text-red-600 text-2xl"></i>
                 <span className="font-bold text-gray-800">Hangzhou Deyun Technology</span>
              </div>
          </div>
      </div>
    </div>
  );
};