import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_INFO } from '@/src/data/mockData';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/muller-hero/1920/1080"
          alt="Muller Empreendimentos Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              Construindo o seu <span className="text-brand-yellow italic">futuro</span> em Sinop.
            </h1>
            <p className="text-lg text-stone-200 mb-10 max-w-xl leading-relaxed">
              A Muller Empreendimentos transforma sonhos em realidade com 100% de entregas antecipadas e o mais alto padrão de engenharia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full bg-brand-yellow text-brand-black hover:bg-yellow-500 px-8 font-bold">
                Ver Empreendimentos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 px-8">
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Falar com Consultor
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">100%</span>
              <span className="text-stone-300 text-xs uppercase tracking-wider">Entregas Antecipadas</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">PBQP-H</span>
              <span className="text-stone-300 text-xs uppercase tracking-wider">Certificação de Qualidade</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">+{COMPANY_INFO.stats?.years} Anos</span>
              <span className="text-stone-300 text-xs uppercase tracking-wider">De História em Sinop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
