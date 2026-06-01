import datavision from '@/assets/datavision.png.asset.json';
import thrilha from '@/assets/thrilha.png.asset.json';
import axispay from '@/assets/axispay.png.asset.json';
import cadastro from '@/assets/cadastro.png.asset.json';
import noticia from '@/assets/asasdanoticia.png.asset.json';
import cartao from '@/assets/cartao.png.asset.json';
import cep from '@/assets/cep.png.asset.json';
import jml from '@/assets/jml.png.asset.json';
import carreta from '@/assets/carreta.png.asset.json';

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
    imageUrl: datavision.url,
    title: 'DataVision',
    description: 'Plataforma de Inteligência Empresarial com IA que transforma planilhas e dados brutos em análises profundas, insights acionáveis e relatórios executivos prontos em segundos.',
    tags: ['React', 'IA', 'Dashboard', 'SaaS'],
    link: 'https://henriqueferreira-ofc.github.io/DataVision/'
  },
  {
    id: '2',
    imageUrl: thrilha.url,
    title: 'Thrilha',
    description: 'Aplicação moderna de organização de tarefas e projetos diários, com interface intuitiva, dark mode e foco em produtividade.',
    tags: ['React', 'Tailwind CSS', 'Produtividade'],
    link: 'https://henriqueferreira-ofc.github.io/thrilha/'
  },
  {
    id: '3',
    imageUrl: axispay.url,
    title: 'AxisPay - Financial Axis',
    description: 'Plataforma financeira com autenticação segura, cadastro e gerenciamento completo de finanças pessoais em uma interface dark elegante.',
    tags: ['React', 'Supabase', 'Fintech'],
    link: 'https://axispay.henriqueanalista-ads.workers.dev/auth?redirect=%2Fauth'
  },
];

export const getSampleMobileProjects = (): Project[] => [
  {
    id: '4',
    imageUrl: cartao.url,
    title: 'Cartão Digital — Henrique Ferreira',
    description: 'Cartão de visitas digital com contato direto via WhatsApp, e-mail, mapa do escritório e link para portfólio. Salva diretamente na agenda do celular.',
    tags: ['Mobile First', 'PWA', 'vCard'],
    link: 'https://henriqueferreira-ofc.github.io/cartaodevisita/'
  },
  {
    id: '5',
    imageUrl: cep.url,
    title: 'Buscador de CEP',
    description: 'Aplicação responsiva que consulta CEPs em tempo real via ViaCEP e exibe a localização aproximada integrada ao Google Maps.',
    tags: ['React', 'ViaCEP API', 'Google Maps'],
    link: 'https://henriqueferreira-ofc.github.io/buscador-de-cep/'
  },
  {
    id: '6',
    imageUrl: jml.url,
    title: 'JML-Pescados — Balancete',
    description: 'Sistema interno de balancete mensal para gestão de fornecedores, cadastro de grude seca e despesas gerais da JML-Pescados.',
    tags: ['Sistema Web', 'Gestão', 'Financeiro'],
    link: 'https://henriqueferreira-ofc.github.io/jmlpescados/'
  },
];

export const getSampleDesignProjects = (): Project[] => [
  {
    id: '7',
    imageUrl: noticia.url,
    title: 'AAFAB Notícias',
    description: 'Portal de notícias da Associação Amigos da Força Aérea Brasileira, com cobertura nacional e internacional, layout editorial e destaque ao vivo.',
    tags: ['Portal', 'Notícias', 'Editorial'],
    link: 'https://henriqueferreira-ofc.github.io/asas-da-not-cia/'
  },
  {
    id: '8',
    imageUrl: cadastro.url,
    title: 'Portal de Atualização Cadastral — AAFAB',
    description: 'Sistema corporativo de recadastramento de associados, com validação por CPF, painel administrativo e conformidade LGPD.',
    tags: ['Sistema', 'LGPD', 'Cadastro'],
    link: 'https://aafab.com.br/'
  },
  {
    id: '9',
    imageUrl: carreta.url,
    title: 'Mandato da Inclusão — SEPD',
    description: 'Painel diário de acompanhamento das visitas, demandas e prioridades da Secretaria da Pessoa com Deficiência (SEPD/GDF), com dashboards integrados ao Forms.',
    tags: ['Dashboard', 'Governo', 'Acessibilidade'],
    link: 'https://henriqueferreira-ofc.github.io/carreta/'
  },
];

export type { Project };
