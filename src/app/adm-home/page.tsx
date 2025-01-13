import React from "react";
import ClienteItem from "~/app/_components/ClienteItem";
import Link from "next/link";
import Botao from "../_components/Botao";

const AdminDashboard = () => {
  const clientes = [
    { id: 1, nome: "João Silva", email: "joao@email.com" },
    { id: 2, nome: "Maria Oliveira", email: "maria@email.com" },
    { id: 3, nome: "Carlos Souza", email: "carlos@email.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 flex items-center justify-between align-middle">
          <h2 className="text-2xl font-bold text-secondary">Clientes</h2>
          <Botao href="/cadastro-cliente" title="Cadastrar " />
        </div>

        <div>
          {clientes.map((cliente) => (
            <ClienteItem key={cliente.id} cliente={cliente} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
