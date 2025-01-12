import React from "react";

const ClienteItem = ({
  cliente,
}: {
  cliente: { nome: string; email: string };
}) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <div>
        <p className="font-bold text-gray-700">{cliente.nome}</p>
        <p className="text-sm text-gray-500">{cliente.email}</p>
      </div>
      <div className="flex space-x-2">
        <button className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600">
          Editar
        </button>
        <button className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
          Deletar
        </button>
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
          Mostrar Mais
        </button>
      </div>
    </div>
  );
};

export default ClienteItem;
