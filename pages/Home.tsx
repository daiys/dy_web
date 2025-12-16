import React from 'react';
import { Hero } from '../components/Hero';
import { PageView, ProjectCase, NewsItem } from '../types';

interface HomeProps {
    setPage: (page: PageView) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  const categories = [
    { name: 'Thermal Insulation', img: 'https://picsum.photos/id/1018/600/400' },
    { name: 'Acoustic Solutions', img: 'https://picsum.photos/id/1015/600/400' },
    { name: 'Refractory Materials', img: 'https://picsum.photos/id/1016/600/400' },
    { name: 'Metal Cladding', img: 'https://picsum.photos/id/192/600/400' },
    { name: 'Cryogenic Insulation', img: 'https://picsum.photos/id/1019/600/400' },
    { name: 'Accessories', img: 'https://picsum.photos/id/250/600/400' },
  ];

  const news: NewsItem[] = [
    { id: '1', title: 'De Yun Completes Phase II Factory Expansion', date: '2023-10-15', summary: 'Our new manufacturing line for ceramic fiber blankets is now fully operational.', imageUrl: 'https://picsum.photos/id/180/400/300' },
    { id: '2', title: 'Exhibiting at China International Industry Fair', date: '2023-09-20', summary: 'Visit our booth at Hall 4.2 to see our latest innovations in aerogel technology.', imageUrl: 'https://picsum.photos/id/119/400/300' },
    { id: '3', title: 'Awarded "Green Factory" Certification', date: '2023-08-05', summary: 'Recognized for our commitment to sustainable production processes and low emissions.', imageUrl: 'https://picsum.photos/id/134/400/300' },
  ];

  return (
    <div className="bg-white">
      <Hero setPage={setPage} />
      
      {/* About Brief */}
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                  <h4 className="text-brand-orange font-bold uppercase tracking-widest mb-2">Who We Are</h4>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Hangzhou Deyun Technology Co., Ltd.</h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      Established in 2005, Hangzhou Deyun Technology is a professional comprehensive enterprise integrating R&D, production, sales, and engineering services of new energy-saving materials.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                      We focus on providing high-quality thermal insulation, sound absorption, and fireproof materials for power, petrochemical, metallurgy, and construction industries. Our products meet international standards (ASTM, BS, JIS).
                  </p>
                  <button onClick={() => setPage(PageView.ABOUT)} className="border-2 border-brand-dark text-brand-dark font-bold py-3 px-8 hover:bg-brand-dark hover:text-white transition">
                      READ MORE
                  </button>
              </div>
              <div className="lg:w-1/2 relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/20 z-0"></div>
                  <img src="https://picsum.photos/id/1058/800/600" className="relative z-10 w-full shadow-2xl rounded-sm" alt="De Yun Headquarters" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-blue/20 z-0"></div>
              </div>
          </div>
      </div>

      {/* Product Categories */}
      <div className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Product Categories</h2>
                  <div className="w-20 h-1 bg-brand-orange mx-auto mt-4"></div>
                  <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Comprehensive solutions for all your industrial insulation needs.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((cat, idx) => (
                      <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => setPage(PageView.PRODUCTS)}>
                          <div className="h-64 bg-gray-200 overflow-hidden">
                              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                              <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                              <i className="fa-solid fa-arrow-right text-brand-orange ml-auto opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all"></i>
                          </div>
                      </div>
                  ))}
              </div>
              <div className="text-center mt-10">
                  <button onClick={() => setPage(PageView.PRODUCTS)} className="bg-brand-orange text-white font-bold py-3 px-10 rounded hover:bg-orange-700 transition shadow-lg">
                      VIEW ALL PRODUCTS
                  </button>
              </div>
          </div>
      </div>

      {/* Application Fields (Icons) */}
      <div className="py-16 bg-brand-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-12">Application Fields</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                      { icon: 'fa-industry', label: 'Petrochemical' },
                      { icon: 'fa-bolt', label: 'Power Generation' },
                      { icon: 'fa-ship', label: 'Marine & Offshore' },
                      { icon: 'fa-building', label: 'Construction' }
                  ].map((field, i) => (
                      <div key={i} className="flex flex-col items-center group">
                          <div className="w-20 h-20 border-2 border-brand-orange rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-orange transition duration-300">
                              <i className={`fa-solid ${field.icon} text-3xl`}></i>
                          </div>
                          <h4 className="text-lg font-medium">{field.label}</h4>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Engineering Cases */}
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Engineering Cases</h2>
              <div className="w-20 h-1 bg-brand-orange mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Zhejiang Thermal Power Plant', loc: 'Hangzhou, China', img: 'https://picsum.photos/id/1040/400/300' },
                { title: 'Sinopec Pipeline Project', loc: 'Shandong, China', img: 'https://picsum.photos/id/1031/400/300' },
                { title: 'Chemical Industrial Park', loc: 'Jiangsu, China', img: 'https://picsum.photos/id/1048/400/300' }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden group hover:shadow-2xl transition">
                      <div className="h-48 overflow-hidden">
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      </div>
                      <div className="p-6">
                          <div className="text-xs text-brand-orange font-bold uppercase mb-1">Project</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-500"><i className="fa-solid fa-location-dot mr-1"></i> {item.loc}</p>
                      </div>
                  </div>
              ))}
          </div>
          <div className="text-center mt-10">
              <button onClick={() => setPage(PageView.CASES)} className="text-brand-orange font-bold hover:underline">View More Projects <i className="fa-solid fa-angle-right"></i></button>
          </div>
      </div>

      {/* News Center */}
      <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-10">
                  <div>
                      <h2 className="text-3xl font-extrabold text-gray-900">News Center</h2>
                      <div className="w-20 h-1 bg-brand-orange mt-4"></div>
                  </div>
                  <button onClick={() => setPage(PageView.NEWS)} className="hidden md:block text-gray-600 hover:text-brand-orange font-medium">More News</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {news.map((n) => (
                      <div key={n.id} className="bg-white p-6 rounded-lg shadow border-b-2 border-transparent hover:border-brand-orange transition">
                          <div className="text-gray-400 text-sm mb-2">{n.date}</div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-brand-orange cursor-pointer">{n.title}</h3>
                          <p className="text-gray-600 text-sm line-clamp-3">{n.summary}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

    </div>
  );
};