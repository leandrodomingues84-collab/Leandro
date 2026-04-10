import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/src/data/mockData';
import { Logo } from '@/src/components/ui/Logo';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-stone-300 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-start">
              <Logo className="w-48" showSlogan={false} variant="white" />
            </Link>
            <p className="text-sm leading-relaxed text-stone-400">
              {COMPANY_INFO.mission}
            </p>
            <div className="flex items-center gap-4">
              <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/a-construtora" className="hover:text-white transition-colors">A Construtora</Link></li>
              <li><Link to="/empreendimentos" className="hover:text-white transition-colors">Empreendimentos</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              <li><Link to="/trabalhe-conosco" className="hover:text-white transition-colors">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Categorias</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link to="/empreendimentos?type=Apartamento" className="hover:text-white transition-colors">Apartamentos em Sinop</Link></li>
              <li><Link to="/empreendimentos?type=Casa" className="hover:text-white transition-colors">Casas em Sinop</Link></li>
              <li><Link to="/empreendimentos?neighborhood=Bairro Ipanema" className="hover:text-white transition-colors">Bairro Ipanema</Link></li>
              <li><Link to="/empreendimentos?status=Lançamento" className="hover:text-white transition-colors">Lançamentos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-stone-500 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-stone-500 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-stone-500 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-stone-800 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
