import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { Admin } from './pages/Admin';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PageView } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case PageView.HOME:
        return <Home setPage={setCurrentPage} />;
      case PageView.PRODUCTS:
        return <ProductList />;
      case PageView.ADMIN:
        return <Admin />;
      case PageView.ABOUT:
        return <About />;
      case PageView.CONTACT:
        return <Contact />;
      case PageView.NEWS:
      case PageView.CASES:
        // Reuse Product List layout or show Coming Soon for secondary pages in MVP
        // But let's route Cases to Home temporarily or show a simple placeholder
        // To be comprehensive, let's just show a simple list for now using ProductList style or Coming Soon
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md px-4">
                    <div className="text-6xl text-brand-orange mb-4"><i className="fa-solid fa-person-digging"></i></div>
                    <h2 className="text-3xl font-bold text-gray-800">Under Construction</h2>
                    <p className="text-gray-500 mt-2 mb-6">The {currentPage} page is currently being updated with new projects and articles.</p>
                    <button onClick={() => setCurrentPage(PageView.HOME)} className="bg-brand-dark text-white px-6 py-2 rounded hover:bg-gray-800 transition">Return Home</button>
                </div>
            </div>
        );
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;