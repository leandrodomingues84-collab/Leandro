import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { COMPANY_INFO } from '@/src/data/mockData';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      {/* Header */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Fale Conosco
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Estamos aqui para ajudar
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Dúvidas, sugestões ou interesse em nossos empreendimentos? Entre em contato por qualquer um de nossos canais.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <h3 className="text-xl font-bold text-stone-900 mb-8">Informações de Contato</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-stone-900" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Endereço</p>
                      <p className="text-stone-700 text-sm">{COMPANY_INFO.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-stone-900" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                      <p className="text-stone-700 text-sm">{COMPANY_INFO.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-stone-900" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">E-mail</p>
                      <p className="text-stone-700 text-sm">{COMPANY_INFO.email}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-stone-900" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Horário de Atendimento</p>
                      <p className="text-stone-700 text-sm">Segunda a Sexta: 08:00 - 18:00</p>
                      <p className="text-stone-700 text-sm">Sábado: 08:00 - 12:00</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-12 pt-8 border-t border-stone-100">
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-6">Redes Sociais</p>
                  <div className="flex items-center gap-4">
                    <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl bg-white p-10 md:p-16 rounded-3xl">
                <h3 className="text-2xl font-bold text-stone-900 mb-8">Envie uma mensagem</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Nome Completo</label>
                    <input
                      type="text"
                      placeholder="Ex: João Silva"
                      className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">E-mail</label>
                    <input
                      type="email"
                      placeholder="Ex: joao@email.com"
                      className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">WhatsApp / Telefone</label>
                    <input
                      type="tel"
                      placeholder="Ex: (66) 99999-9999"
                      className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Assunto</label>
                    <select className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none transition-all">
                      <option>Dúvida Geral</option>
                      <option>Interesse em Empreendimento</option>
                      <option>Agendamento de Visita</option>
                      <option>Trabalhe Conosco</option>
                      <option>Outros</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-wider">Mensagem</label>
                    <textarea
                      rows={5}
                      placeholder="Como podemos ajudar?"
                      className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-stone-200 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <Button className="w-full md:w-auto px-12 h-14 rounded-full bg-stone-900 hover:bg-stone-800 text-lg font-bold">
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-lg grayscale">
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
