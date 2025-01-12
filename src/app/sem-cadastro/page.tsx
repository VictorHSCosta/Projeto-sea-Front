"use client";

import Link from "next/link";
import React from "react";

const ClienteNaoCadastrado = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="max-w-lg rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="text-secondary mb-4 text-2xl font-bold">
          Cliente não cadastrado
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          Você não possui dados cadastrados no sistema.
        </p>
        <p className="mb-6 text-base text-gray-700">
          Por favor, entre em contato com a administração para resolver essa
          situação.
        </p>
        <Link
          href="/"
          className="bg-secondary hover:bg-secondary-dark inline-block rounded-lg px-4 py-2 text-white transition"
        >
          Entrar em Contato
        </Link>
      </div>
    </div>
  );
};

export default ClienteNaoCadastrado;
