
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectRow from '@/components/ProjectRow';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Sample project data
  const webProjects = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, checkout, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with animated transitions and dynamic content loading.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: '#'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Dashboard UI',
      description: 'Admin dashboard with data visualization, user management and reporting features.',
      tags: ['React', 'TypeScript', 'Chart.js'],
      link: '#'
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Social Media App',
      description: 'Platform for connecting users with similar interests and sharing content.',
      tags: ['React Native', 'Firebase'],
      link: '#'
    },
  ];

  const mobileProjects = [
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and health metrics.',
      tags: ['React Native', 'Redux', 'HealthKit'],
      link: '#'
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Recipe Finder',
      description: 'App that suggests recipes based on ingredients you have at home.',
      tags: ['Flutter', 'Firebase', 'API Integration'],
      link: '#'
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Travel Companion',
      description: 'Travel planning and itinerary management with maps and recommendations.',
      tags: ['React Native', 'Google Maps API'],
      link: '#'
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Weather App',
      description: 'Real-time weather forecasts with beautiful visualizations and notifications.',
      tags: ['Swift', 'Weather API'],
      link: '#'
    },
  ];

  const designProjects = [
    {
      id: 9,
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Brand Identity',
      description: 'Complete brand identity design including logo, color scheme, and guidelines.',
      tags: ['Branding', 'Illustrator', 'Photoshop'],
      link: '#'
    },
    {
      id: 10,
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'UI/UX Case Study',
      description: 'Comprehensive UX research and UI design for a financial application.',
      tags: ['Figma', 'User Research', 'Prototyping'],
      link: '#'
    },
    {
      id: 11,
      imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Product Design',
      description: 'End-to-end product design for a smart home device and companion app.',
      tags: ['Industrial Design', 'UI/UX', '3D Modeling'],
      link: '#'
    },
    {
      id: 12,
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Marketing Materials',
      description: 'Design of print and digital marketing assets for a product launch campaign.',
      tags: ['Graphic Design', 'Marketing', 'Print Design'],
      link: '#'
    },
  ];

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="container mx-auto pt-16 px-4" id="projects">
          <div id="featured-project" className="pb-8">
            <ProjectRow title="Web Development" projects={webProjects} />
            <ProjectRow title="Mobile Applications" projects={mobileProjects} />
            <ProjectRow title="Design Projects" projects={designProjects} />
          </div>
        </div>
        
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
