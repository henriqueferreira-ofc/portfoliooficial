import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-netflix-black py-12 border-t border-netflix-medium-gray mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <h3 className="text-white font-medium mb-4">Conecte-se Comigo</h3>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-netflix-light-gray hover:text-netflix-red transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-netflix-light-gray hover:text-netflix-red transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-netflix-light-gray hover:text-netflix-red transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-netflix-light-gray hover:text-netflix-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <p className="text-netflix-light-gray">© {new Date().getFullYear()} - Todos os Direitos Reservados</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;