
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-netflix-dark-gray rounded-lg p-6 text-center hover:bg-netflix-medium-gray transition-colors">
              <div className="text-netflix-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">Meus Projetos</h2>
              <p className="text-gray-300 mb-5">
                Confira os projetos que desenvolvi, desde aplicações web até apps móveis e design.
              </p>
              <Link to="/projects">
                <Button className="bg-netflix-red hover:bg-red-700 text-white">
                  Ver Projetos
                </Button>
              </Link>
            </div>
            
            <div className="bg-netflix-dark-gray rounded-lg p-6 text-center hover:bg-netflix-medium-gray transition-colors">
              <div className="text-netflix-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">Sobre Mim</h2>
              <p className="text-gray-300 mb-5">
                Conheça minha trajetória, habilidades técnicas e experiência profissional.
              </p>
              <Link to="/about">
                <Button className="bg-netflix-red hover:bg-red-700 text-white">
                  Saiba Mais
                </Button>
              </Link>
            </div>
            
            <div className="bg-netflix-dark-gray rounded-lg p-6 text-center hover:bg-netflix-medium-gray transition-colors">
              <div className="text-netflix-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">Entre em Contato</h2>
              <p className="text-gray-300 mb-5">
                Interessado em trabalhar juntos? Entre em contato para discutirmos seu projeto.
              </p>
              <Link to="/contact">
                <Button className="bg-netflix-red hover:bg-red-700 text-white">
                  Contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
