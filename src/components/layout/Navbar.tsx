import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/src/components/ui/Logo';
import { COMPANY_INFO } from '@/src/data/mockData';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'A Construtora', href: '/a-construtora' },
  { name: 'Empreendimentos', href: '/empreendimentos' },
  { name: 'Diferenciais', href: '/diferenciais' },
  { name: 'Depoimentos', href: '/depoimentos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarBg = isScrolled 
    ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
    : (isHomePage ? 'bg-transparent py-5' : 'bg-white shadow-sm py-3');

  const useWhiteText = isHomePage && !isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center group shrink-0">
          <Logo 
            className="w-24 md:w-32" 
            variant={useWhiteText ? 'white' : 'default'} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[13px] xl:text-sm font-semibold transition-colors hover:text-brand-yellow whitespace-nowrap ${
                location.pathname === link.href 
                  ? (useWhiteText ? 'text-brand-yellow underline underline-offset-4' : 'text-brand-black underline underline-offset-4') 
                  : (useWhiteText ? 'text-white/90' : 'text-stone-600')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 xl:gap-3 shrink-0">
          <Button variant="ghost" size="sm" asChild className={`rounded-full transition-colors hidden lg:flex px-3 xl:px-4 ${useWhiteText ? 'text-white/80 hover:text-white' : 'text-stone-600 hover:text-brand-black'}`}>
            <Link to="/agendamento" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden xl:inline">Agendar Visita</span>
              <span className="xl:hidden">Agendar</span>
            </Link>
          </Button>
          <Button size="sm" asChild className="rounded-full bg-brand-yellow text-brand-black hover:bg-yellow-500 px-4 xl:px-6 shadow-lg shadow-brand-yellow/20 font-bold">
            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Falar com Consultor</span>
              <span className="sm:hidden">Consultor</span>
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={useWhiteText ? 'text-white' : 'text-stone-900'}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-lg font-medium text-stone-900"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 mt-6">
                  <Button variant="outline" asChild className="w-full rounded-full">
                    <Link to="/agendamento">Agendar Visita</Link>
                  </Button>
                  <Button asChild className="w-full rounded-full bg-stone-900">
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
