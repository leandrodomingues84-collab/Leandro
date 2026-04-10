import { Briefcase, Heart, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const BENEFITS = [
  { icon: Heart, title: 'Ambiente Acolhedor', description: 'Cultura baseada na humildade e no respeito mútuo.' },
  { icon: Star, title: 'Crescimento', description: 'Oportunidades reais de desenvolvimento profissional.' },
  { icon: Users, title: 'Equipe de Elite', description: 'Trabalhe com os melhores profissionais do mercado.' },
];

export default function Careers() {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      {/* Header */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Venha crescer conosco
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Trabalhe na Muller
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Buscamos talentos que compartilhem nossos valores de ética, inovação e excelência. Faça parte da nossa história.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Nossa Cultura</h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                Na Muller Empreendimentos, acreditamos que grandes obras são feitas por grandes pessoas. Nossa cultura valoriza a humildade, a busca constante por inovação e a segurança em tudo o que fazemos.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {BENEFITS.map(benefit => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center shrink-0">
                      <benefit.icon className="w-6 h-6 text-stone-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-stone-500">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/muller-team/800/600"
                alt="Equipe Muller"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl bg-white p-10 md:p-16 rounded-3xl">
              <div className="text-center mb-12">
                <Briefcase className="w-12 h-12 text-stone-900 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Envie seu Currículo</h3>
                <p className="text-stone-500">
                  Não encontrou uma vaga aberta? Envie seu currículo para nosso banco de talentos.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Nome Completo</label>
                    <input
                      type="text"
                      className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">E-mail</label>
                    <input
                      type="email"
                      className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Área de Interesse</label>
                  <select className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none">
                    <option>Engenharia / Obras</option>
                    <option>Administrativo / Financeiro</option>
                    <option>Vendas / Comercial</option>
                    <option>Marketing</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Link do LinkedIn / Portfólio</label>
                  <input
                    type="url"
                    className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Anexar Currículo (PDF)</label>
                  <div className="w-full border-2 border-dashed border-stone-200 rounded-xl p-8 text-center hover:border-stone-400 transition-all cursor-pointer">
                    <p className="text-sm text-stone-500">Clique para selecionar ou arraste o arquivo aqui</p>
                  </div>
                </div>
                <Button className="w-full h-14 rounded-full bg-stone-900 hover:bg-stone-800 text-lg font-bold">
                  Candidatar-se
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
