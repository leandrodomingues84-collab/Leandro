import { motion } from 'motion/react';
import { Star, Quote, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { COMPANY_INFO } from '@/src/data/mockData';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ricardo Santos",
    role: "Investidor",
    content: "A Muller superou todas as minhas expectativas. A entrega antecipada me permitiu rentabilizar o imóvel muito antes do planejado. A qualidade do acabamento é impecável.",
    rating: 5,
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    id: 2,
    name: "Mariana Oliveira",
    role: "Moradora do Residencial Ipanema",
    content: "Realizei o sonho da casa própria com a segurança que só uma empresa com PBQP-H pode oferecer. O atendimento pós-venda também é excelente.",
    rating: 5,
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    role: "Empresário",
    content: "O que mais me impressionou foi a transparência em cada etapa da obra. Receber fotos e vídeos mensais do progresso traz uma paz de espírito enorme.",
    rating: 5,
    image: "https://picsum.photos/seed/user3/100/100"
  }
];

export default function Testimonials() {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      {/* Header */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Cases de Sucesso
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Depoimentos
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              A satisfação de nossos clientes é o nosso maior patrimônio. Conheça as histórias de quem já investiu com a Muller.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Depoimentos em Vídeo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
                <img 
                  src={i === 1 ? "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1280&q=80" : "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1280&q=80"} 
                  alt="Depoimento Vídeo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                  <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-brand-black fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-bold text-xl">Depoimento de Cliente #{i}</p>
                  <p className="text-stone-300 text-sm">Empreendimento entregue em 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <Card key={t.id} className="border-none shadow-sm bg-stone-50 p-8 rounded-3xl">
                <Quote className="w-10 h-10 text-stone-200 mb-6" />
                <p className="text-stone-600 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-stone-900">{t.name}</h4>
                    <p className="text-xs text-stone-500">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-yellow fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivered Projects Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Empreendimentos Entregues</h2>
            <p className="text-stone-500">Orgulho em transformar a paisagem de Sinop com qualidade e pontualidade.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1460317442991-0ec239f36791?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
            ].map((url, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={url} 
                  alt="Projeto Entregue" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Seja o próximo a realizar seu sonho</h2>
          <Button size="lg" className="rounded-full bg-brand-yellow text-brand-black hover:bg-yellow-500 px-12 font-bold" asChild>
            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer">
              Falar com um Consultor
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
