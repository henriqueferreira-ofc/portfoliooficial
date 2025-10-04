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
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
