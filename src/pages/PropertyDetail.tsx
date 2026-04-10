import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Maximize, BedDouble, Bath, Car, MapPin, 
  CheckCircle2, Phone, Calendar, ArrowLeft,
  Share2, Heart, Calculator
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PROPERTIES, COMPANY_INFO } from '@/src/data/mockData';

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = PROPERTIES.find(p => p.slug === slug);

  if (!property) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-2xl font-bold">Empreendimento não encontrado</h1>
        <Button asChild className="mt-4">
          <Link to="/empreendimentos">Voltar para listagem</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-stone-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-stone-100 py-4 sticky top-[72px] z-30">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/empreendimentos" className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para busca
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Gallery */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px]">
                <div className="md:col-span-2 h-full rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {property.images.slice(1, 3).map((img, i) => (
                  <div key={i} className="hidden md:block h-full rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src={img}
                      alt={`${property.title} - ${i + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Title & Stats */}
            <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-stone-100 text-stone-900 hover:bg-stone-100 border-none px-4 py-1">
                  {property.status}
                </Badge>
                <Badge className="bg-stone-900 text-white hover:bg-stone-900 border-none px-4 py-1">
                  {property.type}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">{property.title}</h1>
              <div className="flex items-center gap-2 text-stone-500 mb-10">
                <MapPin className="w-5 h-5" />
                {property.neighborhood}, {property.location}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-stone-100">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Área</span>
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
                    <Maximize className="w-5 h-5 text-stone-400" />
                    {property.area}m²
                  </div>
                </div>
                {property.bedrooms && (
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Quartos</span>
                    <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
                      <BedDouble className="w-5 h-5 text-stone-400" />
                      {property.bedrooms}
                    </div>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Banheiros</span>
                    <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
                      <Bath className="w-5 h-5 text-stone-400" />
                      {property.bathrooms}
                    </div>
                  </div>
                )}
                {property.parking && (
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Vagas</span>
                    <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
                      <Car className="w-5 h-5 text-stone-400" />
                      {property.parking}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Description & Features */}
            <Tabs defaultValue="sobre" className="w-full">
              <TabsList className="bg-transparent border-b border-stone-200 w-full justify-start rounded-none h-auto p-0 gap-8">
                <TabsTrigger value="sobre" className="rounded-none border-b-2 border-transparent data-[state=active]:border-stone-900 data-[state=active]:bg-transparent px-0 py-4 text-base font-bold">
                  Sobre o Imóvel
                </TabsTrigger>
                <TabsTrigger value="diferenciais" className="rounded-none border-b-2 border-transparent data-[state=active]:border-stone-900 data-[state=active]:bg-transparent px-0 py-4 text-base font-bold">
                  Diferenciais
                </TabsTrigger>
                <TabsTrigger value="obra" className="rounded-none border-b-2 border-transparent data-[state=active]:border-stone-900 data-[state=active]:bg-transparent px-0 py-4 text-base font-bold">
                  Status da Obra
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sobre" className="py-8">
                <p className="text-stone-600 leading-relaxed text-lg mb-8">
                  {property.description}
                </p>
                <h3 className="font-bold text-stone-900 mb-6">Características:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3 text-stone-600">
                      <CheckCircle2 className="w-5 h-5 text-stone-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="diferenciais" className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.highlights.map(highlight => (
                    <div key={highlight} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                      <h4 className="font-bold text-stone-900 mb-2">{highlight}</h4>
                      <p className="text-sm text-stone-500">Qualidade garantida pela Muller Empreendimentos.</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="obra" className="py-8">
                <div className="space-y-8">
                  {property.constructionProgress.map(progress => (
                    <div key={progress.label}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-stone-900">{progress.label}</span>
                        <span className="text-stone-500 font-medium">{progress.percentage}%</span>
                      </div>
                      <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${progress.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full bg-stone-900"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Map */}
            <section className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-stone-900 mb-8">Localização</h3>
              <div className="aspect-video rounded-2xl overflow-hidden grayscale">
                <iframe
                  src={property.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <Card className="border-none shadow-xl bg-stone-900 text-white p-8 rounded-3xl sticky top-40">
              <h3 className="text-2xl font-bold mb-6">Tenho Interesse</h3>
              <p className="text-stone-400 text-sm mb-8">
                Preencha o formulário abaixo e um de nossos consultores entrará em contato em breve.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full bg-stone-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-700 outline-none"
                />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full bg-stone-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-700 outline-none"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp / Telefone"
                  className="w-full bg-stone-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-700 outline-none"
                />
                <Button className="w-full rounded-xl bg-white text-stone-900 hover:bg-stone-100 h-12 font-bold">
                  Enviar Mensagem
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-stone-800 flex flex-col gap-4">
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-sm font-bold hover:text-stone-300 transition-colors">
                  <Phone className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
                <Link to="/agendamento" className="flex items-center justify-center gap-3 text-sm font-bold hover:text-stone-300 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Agendar Visita
                </Link>
              </div>
            </Card>

            {/* Financing Simulator Placeholder */}
            <Card className="border-none shadow-lg bg-white p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-stone-400" />
                <h3 className="text-xl font-bold text-stone-900">Simulador</h3>
              </div>
              <p className="text-stone-500 text-sm mb-6">
                Faça uma simulação rápida de financiamento para este imóvel.
              </p>
              <Button variant="outline" className="w-full rounded-xl border-stone-200">
                Simular Agora
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
