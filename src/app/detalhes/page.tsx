"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const DetalhesCliente = () => {
  const searchParams = useSearchParams();
  const [cliente, setCliente] = useState<{
    id: string;
    nome: string;
    email: string;
    telefone: string[];
    endereco: {
      logradouro: string;
      numero: number;
      complemento: string;
      bairro: string;
      cidade: string;
      estado: string;
      cep: string;
    };
    cpf: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const clienteId = searchParams.get("id");
        if (!clienteId) {
          throw new Error("Nenhum ID fornecido na URL.");
        }

        const clientes = [
          {
            id: "1002342",
            nome: "João Silva",
            email: "joao@email.com",
            telefone: ["11999999999"],
            endereco: {
              logradouro: "Rua Principal",
              numero: 123,
              complemento: "",
              bairro: "Centro",
              cidade: "São Paulo",
              estado: "SP",
              cep: "01001-000",
            },
            cpf: "123.456.789-00",
          },
          {
            id: "1002343",
            nome: "Maria Oliveira",
            email: "maria@email.com",
            telefone: ["21988888888", "21977777777"],
            endereco: {
              logradouro: "Avenida Paulista",
              numero: 500,
              complemento: "Apto 501",
              bairro: "Bela Vista",
              cidade: "São Paulo",
              estado: "SP",
              cep: "01310-000",
            },
            cpf: "987.654.321-00",
          },
        ];

        const clienteEncontrado = clientes.find((c) => c.id === clienteId);
        if (!clienteEncontrado) {
          throw new Error("Cliente não encontrado.");
        }

        setCliente(clienteEncontrado);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    };

    void fetchCliente();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-xl font-bold text-gray-700">Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-xl font-bold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-secondary mb-6 text-2xl font-bold">
          Detalhes do Cliente
        </h2>
        <div className="mb-4">
          <p className="text-lg">
            <span className="font-bold">Nome:</span> {cliente?.nome}
          </p>
          <p className="text-lg">
            <span className="font-bold">Email:</span> {cliente?.email}
          </p>
          <p className="text-lg">
            <span className="font-bold">CPF:</span> {cliente?.cpf}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-bold">Endereço</h3>
          <p>
            <span className="font-bold">Logradouro:</span>{" "}
            {cliente?.endereco.logradouro}, {cliente?.endereco.numero}
            {cliente?.endereco.complemento
              ? `, ${cliente?.endereco.complemento}`
              : ""}
          </p>
          <p>
            <span className="font-bold">Bairro:</span>{" "}
            {cliente?.endereco.bairro}
          </p>
          <p>
            <span className="font-bold">Cidade:</span>{" "}
            {cliente?.endereco.cidade}
          </p>
          <p>
            <span className="font-bold">Estado:</span>{" "}
            {cliente?.endereco.estado}
          </p>
          <p>
            <span className="font-bold">CEP:</span> {cliente?.endereco.cep}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-bold">Telefones</h3>
          <ul>
            {cliente?.telefone.map((tel, index) => <li key={index}>{tel}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function SuspenseWrapper() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <p className="text-xl font-bold text-gray-700">Carregando...</p>
        </div>
      }
    >
      <DetalhesCliente />
    </Suspense>
  );
}
