import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/site';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-netflix-black bg-opacity-95 shadow-md' : 'bg-gradient-to-b from-netflix-black to-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="text-netflix-red font-bold text-2xl md:text-3xl tracking-wider">{siteConfig.name}</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-netflix-red transition-colors">Início</Link>
          <Link to="/projects" className="text-white hover:text-netflix-red transition-colors">Projetos</Link>
          <Link to="/about" className="text-white hover:text-netflix-red transition-colors">Sobre</Link>
          <Link to="/contact" className="text-white hover:text-netflix-red transition-colors">Contato</Link>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-white"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-netflix-black bg-opacity-95 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-netflix-red transition-colors text-left">Início</Link>
            <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-netflix-red transition-colors text-left">Projetos</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-netflix-red transition-colors text-left">Sobre</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-netflix-red transition-colors text-left">Contato</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
