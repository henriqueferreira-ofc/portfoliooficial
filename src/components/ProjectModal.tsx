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
      <DialogContent className="max-w-4xl p-0 bg-netflix-black border-none overflow-hidden">
        <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-netflix-black/80 p-2 hover:bg-netflix-black transition-colors">
          <X className="h-5 w-5 text-white" />
        </DialogClose>
        
        <div className="relative">
          {/* Backdrop Image */}
          <div 
            className="w-full h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/60 to-transparent" />
            
            {/* Content Over Image */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
            </div>
          </div>
          
          {/* Details Section */}
          <div className="p-8 bg-netflix-black">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-3 py-1 bg-netflix-medium-gray text-white rounded-full border border-netflix-light-gray/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Description */}
            <p className="text-netflix-light-gray leading-relaxed mb-6">
              {description}
            </p>
            
            {/* CTA Button */}
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-netflix-red hover:bg-netflix-dark-red text-white font-semibold rounded transition-colors"
              >
                Vamos lá
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
