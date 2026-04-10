import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import FeaturedProperties from '../components/sections/FeaturedProperties';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import BlogPreview from '../components/sections/BlogPreview';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '@/src/data/mockData';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogPreview />

      {/* FAQ Section for AEO */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block text-center">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
              Perguntas sobre Investimento e Moradia
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Por que investir em um empreendimento Muller?",
                  a: "A Muller Empreendimentos possui 16 anos de história em Sinop, com 100% de entregas antecipadas e certificação PBQP-H, garantindo segurança e valorização do seu patrimônio."
                },
                {
                  q: "Quais são as opções de financiamento disponíveis?",
                  a: "Trabalhamos com diversas modalidades de financiamento bancário e direto com a construtora. Nossos consultores realizam uma simulação personalizada para o seu perfil."
                },
                {
                  q: "Como acompanhar o andamento da minha obra?",
                  a: "Disponibilizamos em nosso site e em canais exclusivos para clientes atualizações mensais com fotos, vídeos e o percentual detalhado de cada etapa da construção."
                },
                {
                  q: "A Muller entrega os apartamentos com qual acabamento?",
                  a: "Nossos empreendimentos seguem um alto padrão de acabamento, com materiais de primeira linha, porcelanatos de grandes formatos e metais de marcas renomadas."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                  <h4 className="font-bold text-stone-900 mb-2">{item.q}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FDB913_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-brand-yellow text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
            Investimentos para a vida.
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
            Não perca a chance de investir no melhor de <span className="text-brand-yellow">Sinop</span>
          </h2>
          <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto">
            Nossos consultores estão online agora para tirar todas as suas dúvidas e apresentar as melhores condições de financiamento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="rounded-full bg-brand-yellow text-brand-black hover:bg-yellow-500 px-12 h-16 text-xl font-bold shadow-2xl shadow-brand-yellow/10" asChild>
              <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                Falar com Consultor
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 px-12 h-16 text-xl font-bold" asChild>
              <Link to="/agendamento" className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Agendar Visita
              </Link>
            </Button>
          </div>
          <p className="mt-12 text-stone-500 text-sm">
            Atendimento personalizado e sem compromisso.
          </p>
        </div>
      </section>
    </div>
  );
}
