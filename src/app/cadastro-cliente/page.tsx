import ClienteForm from "~/app/_components/ClienteForm";

export default function CadastroCliente() {
  return (
    <main className="my-20 flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-secondary mb-4 text-center text-2xl font-bold">
          Cadastro de Cliente
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          Preencha os dados abaixo para cadastrar um novo cliente
        </p>
        <ClienteForm action="/api/clientes" buttonText="Cadastrar Cliente" />
      </div>
    </main>
  );
}
