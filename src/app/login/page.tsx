"use client";

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-secondary mb-4 text-center text-2xl font-bold">
          Bem-vindo
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          Faça login para acessar o sistema
        </p>

        <form action="/api/login" method="POST">
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
              required
              placeholder="Digite seu email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block font-bold text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Digite sua senha"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="bg-secondary w-full rounded-lg px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-secondary text-sm hover:underline">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
    </main>
  );
}
