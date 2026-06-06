interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const img = (name: string) => `${import.meta.env.BASE_URL}projects/${name}.webp`;

export const getSampleWebProjects = (): Project[] => [
  {
    id: '1',
    imageUrl: img('datavision'),
    title: 'DataVision',
    description: 'Plataforma de Inteligência Empresarial com IA que transforma planilhas e dados brutos em análises profundas, insights acionáveis e relatórios executivos prontos em segundos.',
    tags: ['React', 'IA', 'Dashboard', 'SaaS'],
    link: 'https://henriqueferreira-ofc.github.io/DataVision/'
  },
  {
    id: '2',
    imageUrl: img('thrilha'),
    title: 'Thrilha',
    description: 'Aplicação moderna de organização de tarefas e projetos diários, com interface intuitiva, dark mode e foco em produtividade.',
    tags: ['React', 'Tailwind CSS', 'Produtividade'],
    link: 'https://henriqueferreira-ofc.github.io/thrilha/'
  },
  {
    id: '3',
    imageUrl: img('axispay'),
    title: 'AxisPay - Financial Axis',
    description: 'Plataforma financeira com autenticação segura, cadastro e gerenciamento completo de finanças pessoais em uma interface dark elegante.',
    tags: ['React', 'Supabase', 'Fintech'],
    link: 'https://axispay.henriqueanalista-ads.workers.dev/auth?redirect=%2Fauth'
  },
];

export const getSampleMobileProjects = (): Project[] => [
  {
    id: '4',
    imageUrl: img('cartao'),
    title: 'Cartão Digital — Henrique Ferreira',
    description: 'Cartão de visitas digital com contato direto via WhatsApp, e-mail, mapa do escritório e link para portfólio. Salva diretamente na agenda do celular.',
    tags: ['Mobile First', 'PWA', 'vCard'],
    link: 'https://henriqueferreira-ofc.github.io/cartaodevisita/'
  },
  {
    id: '5',
    imageUrl: img('cep'),
    title: 'Buscador de CEP',
    description: 'Aplicação responsiva que consulta CEPs em tempo real via ViaCEP e exibe a localização aproximada integrada ao Google Maps.',
    tags: ['React', 'ViaCEP API', 'Google Maps'],
    link: 'https://henriqueferreira-ofc.github.io/buscador-de-cep/'
  },
  {
    id: '6',
    imageUrl: img('jml'),
    title: 'JML-Pescados — Balancete',
    description: 'Sistema interno de balancete mensal para gestão de fornecedores, cadastro de grude seca e despesas gerais da JML-Pescados.',
    tags: ['Sistema Web', 'Gestão', 'Financeiro'],
    link: 'https://henriqueferreira-ofc.github.io/jmlpescados/'
  },
];

export const getSampleDesignProjects = (): Project[] => [
  {
    id: '7',
    imageUrl: img('asasdanoticia'),
    title: 'AAFAB Notícias',
    description: 'Portal de notícias da Associação Amigos da Força Aérea Brasileira, com cobertura nacional e internacional, layout editorial e destaque ao vivo.',
    tags: ['Portal', 'Notícias', 'Editorial'],
    link: 'https://henriqueferreira-ofc.github.io/asas-da-not-cia/'
  },
  {
    id: '8',
    imageUrl: img('cadastro'),
    title: 'Portal de Atualização Cadastral — AAFAB',
    description: 'Sistema corporativo de recadastramento de associados, com validação por CPF, painel administrativo e conformidade LGPD.',
    tags: ['Sistema', 'LGPD', 'Cadastro'],
    link: 'https://aafab.com.br/'
  },
  {
    id: '9',
    imageUrl: img('carreta'),
    title: 'Mandato da Inclusão — SEPD',
    description: 'Painel diário de acompanhamento das visitas, demandas e prioridades da Secretaria da Pessoa com Deficiência (SEPD/GDF), com dashboards integrados ao Forms.',
    tags: ['Dashboard', 'Governo', 'Acessibilidade'],
    link: 'https://henriqueferreira-ofc.github.io/carreta/'
  },
];

export type { Project };
