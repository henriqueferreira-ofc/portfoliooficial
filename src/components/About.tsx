
const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-16 bg-netflix-dark-gray">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          
          <div className="space-y-6 text-netflix-light-gray">
            <p>
              I'm a passionate developer with a focus on creating beautiful digital experiences. 
              Inspired by cinematic storytelling, I bring that same narrative approach to my development work.
            </p>
            
            <p>
              With expertise in React, TypeScript, and modern frontend technologies, I build applications 
              that are not just functional but engaging and immersive.
            </p>
            
            <p>
              When I'm not coding, you might find me analyzing film techniques, exploring new design trends,
              or contributing to open-source projects.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Git', 'Figma', 'UI/UX Design'].map((skill, index) => (
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
