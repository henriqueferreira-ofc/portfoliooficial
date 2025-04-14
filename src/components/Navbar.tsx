
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-netflix-black bg-opacity-95 shadow-md' : 'bg-gradient-to-b from-netflix-black to-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="text-netflix-red font-bold text-2xl md:text-3xl tracking-wider">PORTFOLIO</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-netflix-red transition-colors">Home</Link>
          <Link to="#projects" className="text-white hover:text-netflix-red transition-colors">Projects</Link>
          <Link to="#about" className="text-white hover:text-netflix-red transition-colors">About</Link>
          <Link to="#contact" className="text-white hover:text-netflix-red transition-colors">Contact</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
