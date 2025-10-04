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
  const primaryTags = tags.slice(0, 3);
  const secondaryTags = tags.slice(3);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-2xl border border-white/10 bg-netflix-black/90 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
        <DialogClose className="absolute top-4 right-4 z-50 rounded-full border border-white/20 bg-black/60 p-2 backdrop-blur">
          <X className="h-4 w-4 text-white" />
        </DialogClose>

        <div className="relative h-[440px] md:h-[500px]">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-netflix-black" />

          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="flex justify-between p-6">
              <div className="flex flex-wrap gap-2">
                {primaryTags.map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="rounded bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6 p-8 md:p-10">
              <div className="flex flex-wrap gap-3 text-xs md:text-sm font-semibold text-white/70">
                <span className="rounded border border-white/20 px-2 py-0.5 uppercase tracking-wide">Projeto em Destaque</span>
                {secondaryTags.map((tag, index) => (
                  <span
                    key={`meta-${tag}-${index}`}
                    className="rounded border border-white/10 px-2 py-0.5 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-4xl font-black text-white drop-shadow-md md:text-5xl">
                {title}
              </h2>

              <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
