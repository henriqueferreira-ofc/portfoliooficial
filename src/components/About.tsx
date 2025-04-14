
const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-16 bg-netflix-dark-gray">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Sobre Mim</h2>
          
          <div className="space-y-6 text-netflix-light-gray">
            <p>
              Sou um desenvolvedor apaixonado com foco na criação de belas experiências digitais. 
              Inspirado pela narrativa cinematográfica, trago essa mesma abordagem narrativa para meu trabalho de desenvolvimento.
            </p>
            
            <p>
              Com expertise em React, TypeScript e tecnologias frontend modernas, construo aplicativos 
              que são não apenas funcionais, mas envolventes e imersivos.
            </p>
            
            <p>
              Quando não estou codificando, você pode me encontrar analisando técnicas de cinema, explorando novas tendências de design,
              ou contribuindo para projetos de código aberto.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Git', 'Figma', 'Design UI/UX'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-netflix-medium-gray rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
