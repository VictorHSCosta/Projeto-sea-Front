"use client";

function addEmail() {
  const emailsContainer = document.getElementById("emailsContainer");
  if (!emailsContainer) return;

  const input = document.createElement("input");
  input.type = "email";
  input.name = "emails[]";
  input.placeholder = "Digite um email";
  input.className =
    "mb-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300";
  emailsContainer.appendChild(input);
}

function addTelefone() {
  const telefonesContainer = document.getElementById("telefonesContainer");
  if (!telefonesContainer) return;

  const input = document.createElement("input");
  input.type = "text";
  input.name = "telefones[]";
  input.placeholder = "Digite um telefone";
  input.className =
    "mb-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300";
  telefonesContainer.appendChild(input);
}

export default function Cadastro() {
  return (
    <main className="my-20 flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-secondary mb-4 text-center text-2xl font-bold">
          Cadastro de Cliente
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          Preencha os dados abaixo para cadastrar um novo cliente
        </p>

        <form id="cadastroClienteForm" action="/api/clientes" method="POST">
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
              required
              placeholder="Digite o nome do cliente"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cpf" className="mb-2 block font-bold text-gray-700">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              required
              placeholder="Digite o CPF (apenas números)"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cep" className="mb-2 block font-bold text-gray-700">
              CEP
            </label>
            <input
              type="text"
              id="cep"
              name="cep"
              required
              placeholder="Digite o CEP"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="logradouro"
              className="mb-2 block font-bold text-gray-700"
            >
              Endereço (Logradouro)
            </label>
            <input
              type="text"
              id="logradouro"
              name="logradouro"
              required
              placeholder="Digite o endereço (ex: Rua, Avenida)"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/3">
              <label
                htmlFor="numero"
                className="mb-2 block font-bold text-gray-700"
              >
                Número
              </label>
              <input
                type="text"
                id="numero"
                name="numero"
                required
                placeholder="Número do imóvel"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="w-1/3">
              <label
                htmlFor="complemento"
                className="mb-2 block font-bold text-gray-700"
              >
                Complemento
              </label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                placeholder="Opcional"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="w-1/3">
              <label
                htmlFor="bairro"
                className="mb-2 block font-bold text-gray-700"
              >
                Bairro
              </label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                required
                placeholder="Digite o bairro"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="cidade"
                className="mb-2 block font-bold text-gray-700"
              >
                Cidade
              </label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                required
                placeholder="Digite a cidade"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="estado"
                className="mb-2 block font-bold text-gray-700"
              >
                Estado (UF)
              </label>
              <input
                type="text"
                id="estado"
                name="estado"
                required
                placeholder="Ex: SP"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-bold text-gray-700">
              Telefones
            </label>
            <div id="telefonesContainer">
              <input
                type="text"
                required
                name="telefones[]"
                placeholder="Digite um telefone"
                className="mb-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              id="addTelefone"
              className="text-secondary text-sm hover:underline"
              onClick={addTelefone}
            >
              + Adicionar Telefone
            </button>
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-bold text-gray-700">Emails</label>
            <div id="emailsContainer">
              <input
                type="email"
                name="emails[]"
                required
                placeholder="Digite um email"
                className="mb-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              id="addEmail"
              className="text-secondary text-sm hover:underline"
              onClick={addEmail}
            >
              + Adicionar Email
            </button>
          </div>

          <button
            type="submit"
            className="bg-secondary w-full rounded-lg px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Cadastrar Cliente
          </button>
        </form>
      </div>
    </main>
  );
}
