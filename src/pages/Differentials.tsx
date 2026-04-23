import { motion } from 'motion/react';
import { CheckCircle2, Shield, Zap, Leaf, TrendingUp, Award, Clock, Ruler } from 'lucide-react';
import { COMPANY_INFO } from '@/src/data/mockData';
import { Button } from '@/components/ui/button';

const DIFFERENTIALS = [
  {
    icon: Clock,
    title: "100% Entregas Antecipadas",
    description: "Nosso histórico é impecável. Planejamento rigoroso que garante a entrega das chaves antes do prazo contratual."
  },
  {
    icon: Award,
    title: "Certificação PBQP-H",
    description: "Nível superior de qualidade reconhecido nacionalmente. Processos auditados e materiais de primeira linha."
  },
  {
    icon: Zap,
    title: "Inteligência de Engenharia",
    description: "Utilizamos as tecnologias mais modernas para otimizar custos e maximizar a eficiência estrutural."
  },
  {
    icon: Ruler,
    title: "Alvenaria Estrutural",
    description: "Método construtivo que oferece maior rapidez, precisão e isolamento térmico/acústico superior."
  },
  {
    icon: TrendingUp,
    title: "Custo-Benefício",
    description: "O melhor valor por metro quadrado de Sinop, com alto potencial de valorização imobiliária."
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Projetos que respeitam o meio ambiente, com gestão de resíduos e eficiência energética."
  }
];

export default function Differentials() {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      {/* Header */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Por que escolher a Muller?
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Nossos Diferenciais
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Construímos com inteligência, entregamos com pontualidade e garantimos o melhor investimento para a sua vida.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIALS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-yellow transition-colors">
                  <item.icon className="w-8 h-8 text-stone-900" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Section: Engineering Intelligence */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=800&q=80" 
                alt="Inteligência de Engenharia" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Inteligência de Engenharia Muller</h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Não apenas construímos prédios, nós desenvolvemos soluções. Nossa equipe técnica utiliza softwares de última geração para simular cada etapa da obra antes mesmo do primeiro tijolo ser colocado.
              </p>
              <ul className="space-y-4">
                {[
                  "Redução de desperdício de materiais em até 30%",
                  "Otimização do cronograma físico-financeiro",
                  "Controle de qualidade rigoroso em cada etapa",
                  "Projetos complementares integrados (BIM)"
                ].map((text) => (
                  <li key={text} className="flex items-center gap-3 text-stone-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-8">Invista com quem entende de Sinop</h2>
          <Button size="lg" className="rounded-full bg-brand-black text-white hover:bg-stone-800 px-12 font-bold" asChild>
            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer">
              Falar com um Consultor
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
