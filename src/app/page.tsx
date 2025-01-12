export default function HomePage() {
  return (
    <main>
      <section className="bg-secondary py-20 text-center text-white">
        <div className="container mx-auto">
          <h2 className="mb-4 text-4xl font-bold">
            Bem-vindo ao Sistema de Gerenciamento
          </h2>
          <p className="mb-6 text-lg">
            Simplifique a gestão de clientes com eficiência e segurança.
          </p>
          <a
            href="/login"
            className="text-secondary rounded-full bg-white px-6 py-3 shadow-md hover:bg-gray-100"
          >
            Acessar o Sistema
          </a>
        </div>
      </section>
      <section id="features" className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="mb-8 text-center text-3xl font-bold">
            Funcionalidades
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <h4 className="mb-2 text-xl font-bold">Autenticação Segura</h4>
              <p className="text-gray-600">
                Login rápido e seguro para administradores e usuários comuns.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <h4 className="mb-2 text-xl font-bold">
                Gerenciamento de Clientes
              </h4>
              <p className="text-gray-600">
                Adicione, edite e visualize informações detalhadas de clientes.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-md">
              <h4 className="mb-2 text-xl font-bold">
                Consultas Automatizadas
              </h4>
              <p className="text-gray-600">
                Integração com serviços de consulta de CEP e CPF.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h3 className="mb-8 text-center text-3xl font-bold">
            Sobre o Sistema
          </h3>
          <p className="mx-auto max-w-3xl text-center text-gray-600">
            Este sistema foi projetado para empresas que buscam uma solução
            eficiente para gerenciar seus clientes, mantendo os dados seguros e
            acessíveis. Com funcionalidades modernas e integração com serviços
            externos, você pode simplificar sua gestão.
          </p>
        </div>
      </section>
    </main>
  );
}
