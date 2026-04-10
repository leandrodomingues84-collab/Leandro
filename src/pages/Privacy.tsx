export default function Privacy() {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-stone-400">Última atualização: 09 de Abril de 2026</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-sm prose prose-stone">
            <h2>1. Coleta de Informações</h2>
            <p>Coletamos informações que você nos fornece diretamente ao preencher formulários em nosso site, como nome, e-mail e telefone.</p>
            
            <h2>2. Uso das Informações</h2>
            <p>As informações coletadas são utilizadas para:</p>
            <ul>
              <li>Entrar em contato sobre empreendimentos de seu interesse;</li>
              <li>Agendar visitas;</li>
              <li>Enviar novidades e ofertas (caso você tenha optado por isso);</li>
              <li>Melhorar nossos serviços e experiência no site.</li>
            </ul>

            <h2>3. Proteção de Dados</h2>
            <p>Seguimos as diretrizes da LGPD (Lei Geral de Proteção de Dados) para garantir que seus dados estejam seguros e sejam tratados com transparência.</p>

            <h2>4. Cookies</h2>
            <p>Utilizamos cookies para entender como você usa nosso site e melhorar sua navegação.</p>

            <h2>5. Contato</h2>
            <p>Para dúvidas sobre sua privacidade, entre em contato pelo e-mail: atendimento@mullerempreendimentos.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
