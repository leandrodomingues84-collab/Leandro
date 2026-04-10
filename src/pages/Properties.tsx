import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, Maximize, BedDouble, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PROPERTIES } from '@/src/data/mockData';
import { Link } from 'react-router-dom';

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');

  const filters = useMemo(() => ({
    status: searchParams.get('status') || 'Todos',
    type: searchParams.get('type') || 'Todos',
    neighborhood: searchParams.get('neighborhood') || 'Todos',
  }), [searchParams]);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filters.status === 'Todos' || property.status === filters.status;
      const matchesType = filters.type === 'Todos' || property.type === filters.type;
      const matchesNeighborhood = filters.neighborhood === 'Todos' || property.neighborhood === filters.neighborhood;

      return matchesSearch && matchesStatus && matchesType && matchesNeighborhood;
    });
  }, [searchTerm, filters]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'Todos') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchTerm('');
  };

  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      {/* Header */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Nossos Empreendimentos</h1>
          <p className="text-stone-600 max-w-2xl">
            Explore nosso portfólio completo de apartamentos, casas e terrenos em Sinop. Qualidade e inovação em cada detalhe.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative w-full lg:w-1/3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <Input
                placeholder="Buscar por nome ou descrição..."
                className="pl-10 rounded-full border-stone-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-2/3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-stone-400 uppercase">Status:</span>
                <select
                  className="bg-transparent text-sm font-medium focus:outline-none"
                  value={filters.status}
                  onChange={(e) => updateFilter('status', e.target.value)}
                >
                  <option>Todos</option>
                  <option>Lançamento</option>
                  <option>Em Obras</option>
                  <option>Pronto para Morar</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-stone-400 uppercase">Tipo:</span>
                <select
                  className="bg-transparent text-sm font-medium focus:outline-none"
                  value={filters.type}
                  onChange={(e) => updateFilter('type', e.target.value)}
                >
                  <option>Todos</option>
                  <option>Apartamento</option>
                  <option>Casa</option>
                  <option>Terreno</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-stone-400 uppercase">Bairro:</span>
                <select
                  className="bg-transparent text-sm font-medium focus:outline-none"
                  value={filters.neighborhood}
                  onChange={(e) => updateFilter('neighborhood', e.target.value)}
                >
                  <option>Todos</option>
                  <option>Bairro Ipanema</option>
                  <option>Residencial Ipanema</option>
                  <option>Centro</option>
                </select>
              </div>

              {(searchTerm || filters.status !== 'Todos' || filters.type !== 'Todos' || filters.neighborhood !== 'Todos') && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-stone-500 hover:text-stone-900 ml-auto">
                  <X className="w-4 h-4 mr-2" />
                  Limpar Filtros
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-stone-500 text-sm">
              Mostrando <span className="font-bold text-stone-900">{filteredProperties.length}</span> resultados
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all group bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-white/90 text-stone-900 hover:bg-white border-none">
                        {property.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 text-stone-500 text-xs mb-3">
                      <MapPin className="w-3 h-3" />
                      {property.neighborhood}, {property.location}
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-6 text-stone-600 text-sm">
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
                    <Button variant="outline" className="w-full rounded-full border-stone-200" asChild>
                      <Link to={`/empreendimentos/${property.slug}`}>Ver Detalhes</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-200">
              <Filter className="w-12 h-12 text-stone-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-stone-900 mb-2">Nenhum resultado encontrado</h3>
              <p className="text-stone-500 mb-8">Tente ajustar seus filtros ou termo de busca.</p>
              <Button onClick={clearFilters} variant="outline" className="rounded-full">
                Ver todos os empreendimentos
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
