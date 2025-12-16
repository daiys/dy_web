import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div className="relative h-80 bg-gray-900 flex items-center justify-center">
          <img src="https://picsum.photos/id/1058/1600/600" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="About Banner" />
          <div className="relative z-10 text-center text-white p-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2">ABOUT US</h1>
              <p className="text-lg text-gray-300">Professional Industrial Material Solutions Provider</p>
          </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-brand-orange">
                      Company Profile
                  </h2>
                  <div className="prose lg:prose-lg text-gray-600">
                      <p className="mb-4">
                          Hangzhou Deyun Technology Co., Ltd. is located in the beautiful city of Hangzhou. We are a leading enterprise specialized in the research, development, manufacturing, and distribution of energy-saving thermal insulation materials and acoustic solutions.
                      </p>
                      <p className="mb-4">
                          Since our inception, we have adhered to the philosophy of "Quality First, Customer Foremost." Our product range includes rock wool, glass wool, ceramic fiber, rubber foam, and calcium silicate, widely used in thermal power, nuclear power, petrochemical refining, offshore platforms, and commercial buildings.
                      </p>
                      <p>
                          We have established long-term cooperative relationships with many large state-owned enterprises and multinational corporations, exporting our products to Southeast Asia, the Middle East, Europe, and America.
                      </p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/id/1018/400/600" className="w-full h-full object-cover rounded-lg shadow-lg transform translate-y-8" alt="Factory Interior" />
                  <img src="https://picsum.photos/id/1033/400/600" className="w-full h-full object-cover rounded-lg shadow-lg" alt="Production Line" />
              </div>
          </div>
      </div>

      {/* Corporate Culture */}
      <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Corporate Culture</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                      { title: 'Mission', desc: 'To provide efficient energy-saving solutions for a greener world.', icon: 'fa-earth-asia' },
                      { title: 'Vision', desc: 'To become the most trusted global partner in insulation materials.', icon: 'fa-eye' },
                      { title: 'Values', desc: 'Integrity, Innovation, Professionalism, Win-Win.', icon: 'fa-hand-holding-heart' },
                      { title: 'Goal', desc: 'Zero defects, 100% customer satisfaction.', icon: 'fa-bullseye' }
                  ].map((item, i) => (
                      <div key={i} className="bg-white p-8 rounded-lg shadow hover:-translate-y-2 transition duration-300">
                          <div className="text-brand-orange text-4xl mb-4"><i className={`fa-solid ${item.icon}`}></i></div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

       {/* Certificates Strip */}
       <div className="py-12 bg-white border-t border-gray-200">
           <div className="max-w-7xl mx-auto px-4 text-center">
                <h3 className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-widest">Our Certifications</h3>
                <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition duration-500">
                    <div className="flex flex-col items-center">
                        <i className="fa-solid fa-award text-6xl text-brand-blue mb-2"></i>
                        <span className="font-bold">ISO 9001</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <i className="fa-solid fa-shield-halved text-6xl text-brand-blue mb-2"></i>
                        <span className="font-bold">ISO 14001</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <i className="fa-solid fa-certificate text-6xl text-brand-blue mb-2"></i>
                        <span className="font-bold">CE Certified</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <i className="fa-solid fa-star text-6xl text-brand-blue mb-2"></i>
                        <span className="font-bold">ASTM Compliant</span>
                    </div>
                </div>
           </div>
       </div>
    </div>
  );
};