import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Testimonials from './pages/Testimonials';
import Differentials from './pages/Differentials';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-construtora" element={<About />} />
        <Route path="empreendimentos" element={<Properties />} />
        <Route path="empreendimentos/:slug" element={<PropertyDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contato" element={<Contact />} />
        <Route path="agendamento" element={<Schedule />} />
        <Route path="trabalhe-conosco" element={<Careers />} />
        <Route path="depoimentos" element={<Testimonials />} />
        <Route path="diferenciais" element={<Differentials />} />
        <Route path="privacidade" element={<Privacy />} />
        <Route path="termos" element={<Terms />} />
      </Route>
    </Routes>
  );
}
