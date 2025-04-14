
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (in a real app, you'd send this to a server)
    console.log('Formulário enviado:', formData);
    alert('Obrigado pela sua mensagem! Em um portfólio real, isso seria enviado para o servidor.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-6">Entre em Contato</h2>
        
        <div className="bg-netflix-dark-gray p-6 md:p-8 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-netflix-medium-gray border border-netflix-light-gray/30 rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-netflix-red"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-netflix-medium-gray border border-netflix-light-gray/30 rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-netflix-red"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-netflix-medium-gray border border-netflix-light-gray/30 rounded p-3 text-white focus:outline-none focus:ring-2 focus:ring-netflix-red"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-netflix-red hover:bg-netflix-dark-red text-white py-3 px-6 rounded transition-colors duration-300 font-medium"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
