import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BLOG_POSTS } from '@/src/data/mockData';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-2xl font-bold">Artigo não encontrado</h1>
        <Button asChild className="mt-4">
          <Link to="/blog">Voltar para o blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o blog
            </Link>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-stone-900 text-white hover:bg-stone-900 border-none px-4 py-1">
                {post.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-stone-500 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="container mx-auto px-4 -mt-16 mb-16">
        <div className="max-w-5xl mx-auto aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-stone prose-lg max-w-none text-stone-600 leading-relaxed">
            <p className="text-xl text-stone-900 font-medium mb-8">
              {post.excerpt}
            </p>
            <p>
              {post.content}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="text-2xl font-bold text-stone-900 mt-12 mb-6">O mercado em Sinop</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="my-12 p-8 bg-stone-50 rounded-3xl border-l-4 border-stone-900 italic text-stone-700">
              "A Muller Empreendimentos se orgulha de fazer parte do crescimento de Sinop, entregando sempre o melhor para nossos clientes."
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-stone-100 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="outline" className="border-stone-200 text-stone-500">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Share */}
          <div className="mt-12 p-8 bg-stone-50 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-stone-400" />
              <span className="font-bold text-stone-900">Compartilhe este artigo</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-stone-200 bg-white">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-stone-200 bg-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-stone-200 bg-white">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter */}
      <section className="mt-24 py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Fique por dentro das novidades</h2>
          <p className="text-stone-400 mb-10 max-w-xl mx-auto">
            Assine nossa newsletter e receba conteúdos exclusivos sobre o mercado imobiliário e novos lançamentos.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-grow bg-stone-800 border-none rounded-full px-6 py-3 text-sm focus:ring-2 focus:ring-stone-700 outline-none"
            />
            <Button className="rounded-full bg-white text-stone-900 hover:bg-stone-100 px-8 font-bold">
              Assinar
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
