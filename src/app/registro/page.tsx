function Registro() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-secondary mb-4 text-center text-2xl font-bold">
          Registrar
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          Crie sua conta para acessar o sistema
        </p>
        <form action="/api/register" method="POST">
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="mb-2 block font-bold text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="senha"
              className="mb-2 block font-bold text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmSenha"
              className="mb-2 block font-bold text-gray-700"
            >
              Confirme sua Senha
            </label>
            <input
              type="password"
              id="confirmSenha"
              name="confirmSenha"
              placeholder="Confirme sua senha"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-secondary x-4 w-full rounded-lg py-2 text-white transition hover:bg-green-700"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
