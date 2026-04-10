export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  status: 'Lançamento' | 'Em Obras' | 'Pronto para Morar';
  type: 'Apartamento' | 'Casa' | 'Terreno';
  location: string;
  neighborhood: string;
  price?: number;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  suites?: number;
  parking?: number;
  images: string[];
  features: string[];
  highlights: string[];
  constructionProgress: {
    label: string;
    percentage: number;
  }[];
  videoUrl?: string;
  virtualTourUrl?: string;
  mapUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  videoUrl?: string;
}
