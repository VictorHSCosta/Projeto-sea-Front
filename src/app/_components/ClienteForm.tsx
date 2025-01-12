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

interface ClienteData {
  nome?: string;
  cpf?: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  telefones?: string[];
  emails?: string[];
}

export default function ClienteForm({
  initialData = {} as ClienteData, // Dados iniciais para edição
  action = "/api/clientes", // URL do formulário
  buttonText = "Salvar", // Texto do botão
}) {
  return (
    <form action={action} method="POST">
      <div className="mb-4">
        <label htmlFor="nome" className="mb-2 block font-bold text-gray-700">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          placeholder="Digite o nome do cliente"
          defaultValue={initialData.nome || ""}
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
          defaultValue={initialData.cpf || ""}
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
          defaultValue={initialData.cep || ""}
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
          placeholder="Digite o endereço"
          defaultValue={initialData.logradouro || ""}
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
            defaultValue={initialData.numero || ""}
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
            defaultValue={initialData.complemento || ""}
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
            defaultValue={initialData.bairro || ""}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">Telefones</label>
        <div id="telefonesContainer">
          {(initialData.telefones || [""]).map((telefone, index) => (
            <input
              key={index}
              type="text"
              name="telefones[]"
              required
              placeholder="Digite um telefone"
              defaultValue={telefone}
              className="mb-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          ))}
        </div>
        <button
          id="addTelefone"
          type="button"
          className="text-secondary text-sm hover:underline"
          onClick={addTelefone}
        >
          + Adicionar Telefone
        </button>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">Emails</label>
        <div id="emailsContainer">
          {(initialData.emails || [""]).map((email, index) => (
            <input
              key={index}
              type="email"
              name="emails[]"
              required
              placeholder="Digite um email"
              defaultValue={email}
              className="mb-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          ))}
        </div>
        <button
          id="addEmail"
          type="button"
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
        {buttonText}
      </button>
    </form>
  );
}
