import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Maximize, MapPin, BedDouble } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROPERTIES } from '@/src/data/mockData';

export default function FeaturedProperties() {
  const featuredProperties = PROPERTIES.filter(p => ['eleeva-jardins', 'eleve-panema', 'urban-deville'].includes(p.slug));

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Oportunidades Exclusivas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 max-w-2xl">
              Como garantimos o ROI do seu investimento imobiliário em Sinop
            </h2>
          </div>
          <Button variant="ghost" asChild className="text-stone-600 hover:text-stone-900">
            <Link to="/empreendimentos">
              Ver portfólio completo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-brand-yellow text-brand-black hover:bg-yellow-500 border-none font-bold">
                      {property.status}
                    </Badge>
                    <Badge className="bg-brand-black/90 text-white hover:bg-brand-black border-none">
                      {property.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 text-stone-500 text-xs mb-3">
                    <MapPin className="w-3 h-3" />
                    {property.neighborhood}, {property.location}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-stone-700 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center justify-between text-stone-600 text-sm">
                    <div className="flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-stone-400" />
                      {property.area}m²
                    </div>
                    {property.bedrooms && (
                      <div className="flex items-center gap-2">
                        <BedDouble className="w-4 h-4 text-stone-400" />
                        {property.bedrooms} Quartos
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full rounded-full border-stone-200 hover:bg-stone-50" asChild>
                    <Link to={`/empreendimentos/${property.slug}`}>Conhecer Detalhes</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
