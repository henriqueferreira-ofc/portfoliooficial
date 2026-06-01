import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    href: 'mailto:henriqueanalista.ads@gmail.com',
    label: 'Email',
    Icon: Mail,
  },
  {
    href: 'https://github.com/henriqueferreira-ofc',
    label: 'GitHub',
    Icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/henriqueferreira-ofc',
    label: 'LinkedIn',
    Icon: Linkedin,
  },
  {
    href: 'https://x.com/hcafoficial',
    label: 'X',
    Icon: Twitter,
  },
];

const Footer = () => {
  return <footer className="bg-netflix-black border-t border-white/10 mt-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-3">
          <div className="text-center sm:text-left">
            <p className="text-netflix-light-gray text-xs sm:text-sm leading-tight">
              © {new Date().getFullYear()} Henrique Ferreira <span className="text-gray-600">• Todos os direitos reservados</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[11px] font-medium uppercase tracking-wide text-gray-500 mr-1">Conecte-se</span>
            <div className="flex gap-1 justify-center">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md text-netflix-light-gray hover:bg-white/5 hover:text-netflix-red transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
