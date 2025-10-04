import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const ProjectModal = ({ isOpen, onClose, imageUrl, title, description, tags, link }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
<<<<<<< HEAD
      <DialogContent className="max-w-5xl w-[90vw] p-0 bg-netflix-black border-none overflow-hidden rounded-lg">
        <DialogClose className="absolute top-6 right-6 z-50 rounded-full bg-black/50 backdrop-blur-sm p-2.5 hover:bg-black/70 transition-all border-2 border-white/20">
          <X className="h-6 w-6 text-white" />
        </DialogClose>
        
        <div className="relative">
          {/* Backdrop Image */}
          <div 
            className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/40 to-transparent" />
            
            {/* Content Over Image */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">{title}</h2>
              
              {/* Tags over image */}
              <div className="flex flex-wrap gap-3 mb-4">
                {tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-sm px-4 py-1.5 bg-black/40 backdrop-blur-sm text-white rounded border border-white/30 font-medium"
=======
      <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-2xl border border-white/10 bg-netflix-black/90 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
        <DialogClose className="absolute top-4 right-4 z-50 rounded-full border border-white/20 bg-black/60 p-2 backdrop-blur">
          <X className="h-4 w-4 text-white" />
        </DialogClose>

        <div className="relative h-[440px]">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-netflix-black" />

          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="flex justify-between p-6">
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="rounded bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur"
>>>>>>> ddb615f (update)
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
<<<<<<< HEAD
          </div>
          
          {/* Details Section */}
          <div className="p-8 md:p-12 bg-netflix-black">
            {/* Description */}
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
              {description}
            </p>
            
            {/* CTA Button */}
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-netflix-red hover:bg-netflix-dark-red text-white text-lg font-bold rounded transition-all hover:scale-105"
              >
                Vamos lá
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}
=======

            <div className="space-y-5 p-8">
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/70">
                <span className="rounded border border-white/20 px-2 py-0.5">Projeto em Destaque</span>
                {tags.slice(3).map((tag, index) => (
                  <span
                    key={`meta-${tag}-${index}`}
                    className="rounded border border-white/10 px-2 py-0.5 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-4xl font-black text-white drop-shadow-md">
                {title}
              </h2>

              <p className="max-w-2xl text-base leading-relaxed text-white/80">
                {description}
              </p>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded bg-netflix-red px-6 py-3 font-semibold text-white shadow-[0_8px_24px_rgba(229,9,20,0.45)] transition hover:bg-netflix-dark-red"
                >
                  Vamos lá
                </a>
              )}
            </div>
>>>>>>> ddb615f (update)
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
