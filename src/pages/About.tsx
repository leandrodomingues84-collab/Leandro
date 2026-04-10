import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Award, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/src/data/mockData';

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Desde {COMPANY_INFO.founded}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              A Muller Empreendimentos
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Referência em qualidade, eficiência e compromisso com o cliente no mercado imobiliário de Sinop - MT.
            </p>
          </div>
        </div>
      </section>

      {/* History & Director */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/muller-office/800/1000"
                alt="Escritório Muller"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 hidden md:block w-64 p-8 bg-stone-900 text-white rounded-3xl shadow-xl">
                <Award className="w-10 h-10 mb-4 text-stone-400" />
                <h4 className="font-bold text-lg mb-2">Certificação PBQP-H</h4>
                <p className="text-xs text-stone-400">Garantia de qualidade em todos os processos construtivos.</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Nossa História</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  Com uma trajetória sólida de {COMPANY_INFO.stats?.years} anos no mercado de Sinop, a Muller Empreendimentos consolidou-se como sinônimo de confiança e inovação na construção civil.
                </p>
                <p>
                  Fundada pelo Engenheiro André Muller, nossa empresa nasceu com o propósito de elevar o padrão habitacional da região. Hoje, orgulhamo-nos de ter entregue mais de {COMPANY_INFO.stats?.unitsDelivered} unidades, incluindo {COMPANY_INFO.stats?.verticalProjects} empreendimentos verticais de sucesso.
                </p>
                <p>
                  Nosso grande diferencial é a inteligência de engenharia aplicada a cada projeto, o que nos permite manter um histórico impecável de 100% de entregas antecipadas, garantindo a satisfação e a segurança do investimento de nossos clientes.
                </p>
                <div className="pt-8 border-t border-stone-100">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-stone-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">{COMPANY_INFO.director}</h4>
                      <p className="text-sm text-stone-500">Diretor e Engenheiro Responsável</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <Target className="w-12 h-12 text-stone-900 mb-6" />
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <Eye className="w-12 h-12 text-stone-900 mb-6" />
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <Heart className="w-12 h-12 text-stone-900 mb-6" />
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <ul className="flex flex-wrap gap-2">
                {COMPANY_INFO.values.map(value => (
                  <li key={value} className="px-3 py-1 bg-stone-100 text-stone-700 text-xs font-bold rounded-full">
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <MapPin className="w-12 h-12 text-stone-900 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Onde Estamos</h2>
            <p className="text-stone-600">
              Nossa sede está localizada estrategicamente em Sinop - MT, para atender com excelência toda a região.
            </p>
          </div>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.0!2d-55.5!3d-11.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQ4JzAwLjAiUyA1NcKwMzAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

import { User } from 'lucide-react';
