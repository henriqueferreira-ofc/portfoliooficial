
interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const getSampleWebProjects = (): Project[] => [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Plataforma E-Commerce',
    description: 'Uma loja online completa com carrinho, checkout e processamento de pagamento.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Site de Portfólio',
    description: 'Site de portfólio responsivo com transições animadas e carregamento dinâmico de conteúdo.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: '#'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Interface de Dashboard',
    description: 'Painel administrativo com visualização de dados, gerenciamento de usuários e recursos de relatórios.',
    tags: ['React', 'TypeScript', 'Chart.js'],
    link: '#'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'App de Mídia Social',
    description: 'Plataforma para conectar usuários com interesses semelhantes e compartilhar conteúdo.',
    tags: ['React Native', 'Firebase'],
    link: '#'
  },
];

export const getSampleMobileProjects = (): Project[] => [
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Rastreador de Fitness',
    description: 'Aplicativo móvel para rastrear treinos, nutrição e métricas de saúde.',
    tags: ['React Native', 'Redux', 'HealthKit'],
    link: '#'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Localizador de Receitas',
    description: 'Aplicativo que sugere receitas com base nos ingredientes que você tem em casa.',
    tags: ['Flutter', 'Firebase', 'Integração API'],
    link: '#'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Companheiro de Viagem',
    description: 'Planejamento de viagens e gerenciamento de itinerário com mapas e recomendações.',
    tags: ['React Native', 'Google Maps API'],
    link: '#'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'App de Clima',
    description: 'Previsões meteorológicas em tempo real com belas visualizações e notificações.',
    tags: ['Swift', 'Weather API'],
    link: '#'
  },
];

export const getSampleDesignProjects = (): Project[] => [
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Identidade de Marca',
    description: 'Design completo de identidade de marca incluindo logotipo, esquema de cores e diretrizes.',
    tags: ['Branding', 'Illustrator', 'Photoshop'],
    link: '#'
  },
  {
    id: '10',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Estudo de Caso UI/UX',
    description: 'Pesquisa UX abrangente e design de UI para um aplicativo financeiro.',
    tags: ['Figma', 'Pesquisa de Usuário', 'Prototipagem'],
    link: '#'
  },
  {
    id: '11',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Design de Produto',
    description: 'Design completo de produto para um dispositivo de casa inteligente e aplicativo complementar.',
    tags: ['Design Industrial', 'UI/UX', 'Modelagem 3D'],
    link: '#'
  },
  {
    id: '12',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Materiais de Marketing',
    description: 'Design de materiais de marketing impressos e digitais para uma campanha de lançamento de produto.',
    tags: ['Design Gráfico', 'Marketing', 'Design de Impressão'],
    link: '#'
  },
];

export type { Project };
