import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BLOG_POSTS } from '@/src/data/mockData';

export default function BlogPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Conteúdo Estratégico
            </span>
            <h2 className="text-4xl font-bold text-stone-900">
              Blog & Notícias
            </h2>
          </div>
          <Button variant="ghost" asChild className="text-stone-600 hover:text-stone-900">
            <Link to="/blog">
              Ver todos os artigos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow group h-full">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardContent className="p-8 lg:w-3/5 flex flex-col justify-center">
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
                    <p className="text-stone-600 text-sm mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-stone-900 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Ler artigo completo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
