import React from "react";
import ClienteItem from "~/app/_components/ClienteItem";

const AdminDashboard = () => {
  const clientes = [
    { id: 1, nome: "João Silva", email: "joao@email.com" },
    { id: 2, nome: "Maria Oliveira", email: "maria@email.com" },
    { id: 3, nome: "Carlos Souza", email: "carlos@email.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-blue-600">Clientes</h2>
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
