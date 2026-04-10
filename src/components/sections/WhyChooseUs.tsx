import { motion } from 'motion/react';
import { CheckCircle2, Zap, ShieldCheck, TrendingUp, Leaf } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    icon: CheckCircle2,
    title: '100% Entregas Antecipadas',
    description: 'Nosso compromisso com o prazo é absoluto. Entregamos todos os nossos empreendimentos antes da data prevista.',
  },
  {
    icon: ShieldCheck,
    title: 'Certificação PBQP-H',
    description: 'Seguimos rigorosos padrões de qualidade e segurança em todos os processos construtivos.',
  },
  {
    icon: Zap,
    title: 'Inteligência de Engenharia',
    description: 'Utilizamos alvenaria estrutural e tecnologias que garantem agilidade e eficiência na obra.',
  },
  {
    icon: TrendingUp,
    title: 'Custo-Benefício',
    description: 'Projetos inteligentes que oferecem o melhor valor por metro quadrado do mercado.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Foco em soluções eco-eficientes que reduzem o impacto ambiental e os custos de manutenção.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Diferenciais Muller
          </span>
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Por que escolher a Muller Empreendimentos?
          </h2>
          <p className="text-stone-600">
            Mais do que construir edifícios, construímos relações de confiança e entregamos lares que superam expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {DIFFERENTIATORS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl shadow-sm flex items-center justify-center mb-6 text-brand-yellow">
                <item.icon className="w-8 h-8" />
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
  );
}
