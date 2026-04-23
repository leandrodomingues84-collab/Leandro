import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/src/data/mockData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1920&q=80')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content Area - Flex Grow to push stats down */}
      <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center py-12 md:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-brand-yellow/20 backdrop-blur-md border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-[0.3em] mb-6 rounded-full">
              Investimentos para a vida.
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Imóveis de Alto Padrão e <span className="text-brand-yellow italic">Retorno Garantido</span> em Sinop.
            </h1>
            <p className="text-lg text-stone-100 mb-10 max-w-xl leading-relaxed font-medium">
              Construímos empreendimentos que elevam sua qualidade de vida e garantem a valorização do seu patrimônio. 100% de entregas antecipadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full bg-brand-yellow text-brand-black hover:bg-yellow-500 px-8 font-bold shadow-xl h-14">
                Ver Portfólio de Obras Entregues
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" className="rounded-full bg-white text-brand-black hover:bg-stone-100 px-8 font-bold shadow-xl h-14" asChild>
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Falar com Consultor
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info Area - Now in the flow, not absolute, to prevent overlap */}
      <div className="relative z-10 bg-gradient-to-t from-black/60 to-transparent pt-12 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8 md:gap-16 border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl md:text-3xl">100%</span>
              <span className="text-stone-300 text-[10px] md:text-xs uppercase tracking-wider font-semibold">Entregas Antecipadas</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl md:text-3xl">PBQP-H</span>
              <span className="text-stone-300 text-[10px] md:text-xs uppercase tracking-wider font-semibold">Certificação de Qualidade</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl md:text-3xl">+{COMPANY_INFO.stats?.years} Anos</span>
              <span className="text-stone-300 text-[10px] md:text-xs uppercase tracking-wider font-semibold">De História em Sinop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
