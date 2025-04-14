
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectRow from '@/components/ProjectRow';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const Index = () => {
  const [webProjects, setWebProjects] = useState<Project[]>([]);
  const [mobileProjects, setMobileProjects] = useState<Project[]>([]);
  const [designProjects, setDesignProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("Attempting to fetch projects from Supabase...");
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching projects:', error);
          throw error;
        }

        if (data && data.length > 0) {
          // Transform the data to match our Project interface
          const transformedProjects: Project[] = data.map(project => ({
            id: project.id.toString(), // Ensure ID is a string
            imageUrl: project.cover_image || 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            title: project.title,
            description: project.description,
            tags: project.technologies || [],
            link: project.demo_url || project.github_url
          }));

          // Filter projects by category
          const web = transformedProjects.filter(project => 
            project.tags.some(tag => 
              ['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS', 'Web'].includes(tag)
            )
          );
          
          const mobile = transformedProjects.filter(project => 
            project.tags.some(tag => 
              ['React Native', 'Flutter', 'Mobile', 'iOS', 'Android', 'Swift'].includes(tag)
            )
          );
          
          const design = transformedProjects.filter(project => 
            project.tags.some(tag => 
              ['Design', 'UI/UX', 'Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator'].includes(tag)
            )
          );

          setWebProjects(web.length > 0 ? web : getSampleWebProjects());
          setMobileProjects(mobile.length > 0 ? mobile : getSampleMobileProjects());
          setDesignProjects(design.length > 0 ? design : getSampleDesignProjects());
          console.log("Successfully loaded projects from Supabase");
        } else {
          console.log("No data found in Supabase, using sample data");
          // No data found, use sample data
          setWebProjects(getSampleWebProjects());
          setMobileProjects(getSampleMobileProjects());
          setDesignProjects(getSampleDesignProjects());
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        toast({
          title: "Notice",
          description: "Using sample project data for display",
          variant: "default",
        });
        
        // Use sample data if there's an error
        setWebProjects(getSampleWebProjects());
        setMobileProjects(getSampleMobileProjects());
        setDesignProjects(getSampleDesignProjects());
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [toast]);

  // Sample data functions (fallback if Supabase fetch fails)
  const getSampleWebProjects = (): Project[] => [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, checkout, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with animated transitions and dynamic content loading.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: '#'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Dashboard UI',
      description: 'Admin dashboard with data visualization, user management and reporting features.',
      tags: ['React', 'TypeScript', 'Chart.js'],
      link: '#'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Social Media App',
      description: 'Platform for connecting users with similar interests and sharing content.',
      tags: ['React Native', 'Firebase'],
      link: '#'
    },
  ];

  const getSampleMobileProjects = (): Project[] => [
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and health metrics.',
      tags: ['React Native', 'Redux', 'HealthKit'],
      link: '#'
    },
    {
      id: '6',
      imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Recipe Finder',
      description: 'App that suggests recipes based on ingredients you have at home.',
      tags: ['Flutter', 'Firebase', 'API Integration'],
      link: '#'
    },
    {
      id: '7',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Travel Companion',
      description: 'Travel planning and itinerary management with maps and recommendations.',
      tags: ['React Native', 'Google Maps API'],
      link: '#'
    },
    {
      id: '8',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Weather App',
      description: 'Real-time weather forecasts with beautiful visualizations and notifications.',
      tags: ['Swift', 'Weather API'],
      link: '#'
    },
  ];

  const getSampleDesignProjects = (): Project[] => [
    {
      id: '9',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Brand Identity',
      description: 'Complete brand identity design including logo, color scheme, and guidelines.',
      tags: ['Branding', 'Illustrator', 'Photoshop'],
      link: '#'
    },
    {
      id: '10',
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'UI/UX Case Study',
      description: 'Comprehensive UX research and UI design for a financial application.',
      tags: ['Figma', 'User Research', 'Prototyping'],
      link: '#'
    },
    {
      id: '11',
      imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Product Design',
      description: 'End-to-end product design for a smart home device and companion app.',
      tags: ['Industrial Design', 'UI/UX', '3D Modeling'],
      link: '#'
    },
    {
      id: '12',
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
          {isLoading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-netflix-red"></div>
            </div>
          ) : (
            <div id="featured-project" className="pb-8">
              {webProjects.length > 0 && <ProjectRow title="Web Development" projects={webProjects} />}
              {mobileProjects.length > 0 && <ProjectRow title="Mobile Applications" projects={mobileProjects} />}
              {designProjects.length > 0 && <ProjectRow title="Design Projects" projects={designProjects} />}
            </div>
          )}
        </div>
        
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
