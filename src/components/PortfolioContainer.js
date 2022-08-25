import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  // Rendering the page content depending on the page that youre on
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <About />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <Contact />;
  };

  // changing the value of current page
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </div>
  );
}
