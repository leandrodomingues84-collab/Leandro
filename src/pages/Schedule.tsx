import { Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROPERTIES } from '@/src/data/mockData';

export default function Schedule() {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      {/* Header */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Visita Personalizada
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Agende sua Visita
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Escolha o melhor dia e horário para conhecer de perto o seu futuro lar. Nossa equipe está pronta para te receber.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Steps */}
              <div className="md:col-span-1 space-y-8">
                <div className="flex flex-col gap-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">Escolha o Imóvel</h4>
                      <p className="text-xs text-stone-500">Selecione qual empreendimento deseja visitar.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-stone-200 text-stone-500 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-stone-400 mb-1">Data e Hora</h4>
                      <p className="text-xs text-stone-500">Defina o melhor momento para você.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-stone-200 text-stone-500 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-stone-400 mb-1">Confirmação</h4>
                      <p className="text-xs text-stone-500">Receba a confirmação em seu WhatsApp.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                  <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-stone-400" />
                    Benefícios da Visita
                  </h4>
                  <ul className="space-y-3 text-sm text-stone-600">
                    <li>• Atendimento exclusivo</li>
                    <li>• Tour completo pela obra/decorado</li>
                    <li>• Simulação de financiamento na hora</li>
                    <li>• Brinde exclusivo Muller</li>
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-2">
                <Card className="border-none shadow-xl bg-white p-10 rounded-3xl">
                  <form className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-stone-900">Selecione o Empreendimento</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {PROPERTIES.map(property => (
                          <label key={property.id} className="flex items-center gap-4 p-4 rounded-2xl border border-stone-100 hover:bg-stone-50 cursor-pointer transition-all has-[:checked]:border-stone-900 has-[:checked]:bg-stone-50">
                            <input type="radio" name="property" className="w-4 h-4 accent-stone-900" />
                            <div className="flex-grow">
                              <p className="font-bold text-stone-900">{property.title}</p>
                              <p className="text-xs text-stone-500">{property.neighborhood}, {property.location}</p>
                            </div>
                            <Badge variant="outline" className="text-[10px]">{property.status}</Badge>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Data Preferencial</label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                          <input
                            type="date"
                            className="w-full bg-stone-50 border border-stone-100 rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Horário</label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                          <select className="w-full bg-stone-50 border border-stone-100 rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none appearance-none">
                            <option>08:00</option>
                            <option>09:00</option>
                            <option>10:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-stone-100">
                      <h3 className="text-xl font-bold text-stone-900">Seus Dados</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          placeholder="Nome Completo"
                          className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none"
                        />
                        <input
                          type="tel"
                          placeholder="WhatsApp"
                          className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none"
                        />
                      </div>
                    </div>

                    <Button className="w-full h-14 rounded-full bg-stone-900 hover:bg-stone-800 text-lg font-bold">
                      Confirmar Agendamento
                    </Button>
                    <p className="text-center text-xs text-stone-400">
                      Ao confirmar, você concorda com nossa Política de Privacidade.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
