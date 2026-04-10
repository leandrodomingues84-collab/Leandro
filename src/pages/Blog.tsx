import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BLOG_POSTS } from '@/src/data/mockData';

export default function Blog() {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      {/* Header */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Conteúdo & Conhecimento
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Blog Muller
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Dicas de decoração, novidades do mercado imobiliário e tudo o que você precisa saber sobre o seu novo lar.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-white border-b border-stone-100 sticky top-[72px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <Input
                placeholder="Pesquisar artigos..."
                className="pl-10 rounded-full border-stone-200"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-stone-900 text-white hover:bg-stone-900 border-none px-4 py-1 cursor-pointer">Todos</Badge>
              <Badge variant="outline" className="border-stone-200 text-stone-600 hover:bg-stone-50 cursor-pointer">Mercado Imobiliário</Badge>
              <Badge variant="outline" className="border-stone-200 text-stone-600 hover:bg-stone-50 cursor-pointer">Decoração</Badge>
              <Badge variant="outline" className="border-stone-200 text-stone-600 hover:bg-stone-50 cursor-pointer">Construção</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all group bg-white h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-stone-900 hover:bg-white border-none">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-stone-500 text-xs mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-stone-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-stone-600 text-sm mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-stone-900 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                      >
                        Continuar lendo
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
