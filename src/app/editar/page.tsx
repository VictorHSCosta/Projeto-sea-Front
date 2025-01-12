import ClienteForm from "~/app/_components/ClienteForm";

export default function EditarCliente() {
  const clienteExistente = {
    nome: "João Silva",
    cpf: "123.456.789-00",
    cep: "01001-000",
    logradouro: "Rua Principal",
    numero: "123",
    complemento: "Apartamento 101",
    bairro: "Centro",
    telefones: ["11999999999", "11888888888"],
    emails: ["joao@email.com", "joaosilva@empresa.com"],
  };

  return (
    <main className="my-20 flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-secondary mb-4 text-center text-2xl font-bold">
          Editar Cliente
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          Atualize os dados do cliente abaixo
        </p>
        <ClienteForm
          initialData={clienteExistente}
          action="/api/clientes/edit"
          buttonText="Salvar Alterações"
        />
      </div>
    </main>
  );
}
