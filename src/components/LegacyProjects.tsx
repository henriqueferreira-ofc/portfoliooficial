
import React from 'react';

interface ProjetosAntigos {
  id: number;
  nome: string;
  descricao: string;
  nivel: number;
  tipo: string;
  repositorio: string;
  imagens: string[] | null;
  destaque: boolean;
}

interface LegacyProjectsProps {
  projetosAntigos: ProjetosAntigos[];
}

const LegacyProjects: React.FC<LegacyProjectsProps> = ({ projetosAntigos }) => {
  if (projetosAntigos.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-4">Projetos Antigos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetosAntigos
          .filter(p => p.destaque)
          .slice(0, 6)
          .map(projeto => (
            <div key={projeto.id} className="bg-netflix-dark-gray rounded-md overflow-hidden shadow-lg">
              <div className="h-48 bg-netflix-medium-gray flex items-center justify-center">
                {projeto.imagens && projeto.imagens.length > 0 ? (
                  <img 
                    src={projeto.imagens[0]} 
                    alt={projeto.nome} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-white text-4xl">{projeto.nome.charAt(0)}</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{projeto.nome}</h3>
                <p className="text-sm text-gray-300 mt-2 line-clamp-3">{projeto.descricao}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs px-2 py-1 bg-netflix-red rounded-full text-white">
                    {projeto.tipo}
                  </span>
                  <a 
                    href={projeto.repositorio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-netflix-red text-sm hover:underline"
                  >
                    Ver projeto
                  </a>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default LegacyProjects;
export type { ProjetosAntigos };
