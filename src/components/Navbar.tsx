
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 pt-safe ${isScrolled || isMobileMenuOpen ? 'bg-netflix-black bg-opacity-95 shadow-md' : 'bg-gradient-to-b from-netflix-black to-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="text-netflix-red font-bold text-2xl md:text-3xl tracking-wider">PORTFÓLIO</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-netflix-red transition-colors">Início</Link>
          <Link to="/about" className="text-white hover:text-netflix-red transition-colors">Sobre</Link>
          <Link to="/projects" className="text-white hover:text-netflix-red transition-colors">Projetos</Link>
          <Link to="/contact" className="text-white hover:text-netflix-red transition-colors">Contato</Link>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white min-h-11 min-w-11 inline-flex items-center justify-center"
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
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-netflix-red transition-colors text-left py-2">Início</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-netflix-red transition-colors text-left py-2">Sobre</Link>
            <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-netflix-red transition-colors text-left py-2">Projetos</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-netflix-red transition-colors text-left py-2">Contato</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
