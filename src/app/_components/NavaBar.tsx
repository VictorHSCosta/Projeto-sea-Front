"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavBarAdm from "~/app/_components/NavBarAdm";
import NavBarCliente from "./NavBarCliente";

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const [autenticado, setAutenticacao] = useState(true);
  const [adm, setAdm] = useState(false);

  return (
    <header
      className={`flex items-center justify-between bg-primary px-2 align-middle`}
    >
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={70} height={60}></Image>
      </Link>
      <nav className={`${autenticado ? "flex" : "hidden"}`}>
        <div className={`${adm ? "flex" : "hidden"} items-center`}>
          <NavBarAdm />
        </div>
        <div className={`${adm ? "hidden" : "flex"} items-center`}>
          <NavBarCliente />
        </div>
      </nav>
      <nav className={`${autenticado ? "hidden" : "flex"} items-center`}>
        <ul className="hidden flex-row space-x-3 md:flex">
          <li className="rounded-3xl bg-secondary p-2 text-white hover:bg-hover">
            <Link href="/login">
              <p className="text-center font-bold">Login</p>
            </Link>
          </li>
          <li className="rounded-3xl bg-secondary p-2 text-white hover:bg-hover">
            <Link href="/registro" className="text-center">
              <p className="text-center font-bold">Registra-se</p>
            </Link>
          </li>
        </ul>
        <div
          className={`houver:bg-hover md:hidden`}
          onClick={() => setMenu(!menu)}
        >
          <div id="hamburger" className="flex flex-col space-y-1">
            <div id="menu">
              <Image
                src="/hamburger.png"
                alt="Menu"
                width={30}
                height={30}
              ></Image>
            </div>
            <div id="menu-mobile" className={`${menu ? "block" : "hidden"}`}>
              <ul className="fixed right-2 top-16 z-10 flex flex-col space-y-3 overflow-hidden rounded-3xl bg-white p-2">
                <li className="rounded-3xl bg-buttons p-2 hover:bg-hover hover:text-white">
                  <Link href="/login">
                    <p className="text-center font-bold">Login</p>
                  </Link>
                </li>
                <li className="rounded-3xl bg-buttons p-2 hover:bg-hover hover:text-white">
                  <Link href="/registro" className="text-center">
                    <p className="text-center font-bold">Registra-se</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
