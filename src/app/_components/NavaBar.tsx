"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="bg-primary flex items-center justify-between px-2 align-middle">
      <a href="/">
        <Image src="/logo.png" alt="Logo" width={70} height={60}></Image>
      </a>
      <nav>
        <ul className="hidden flex-row space-x-3 md:flex">
          <li className="bg-secondary hover:bg-hover rounded-3xl p-2 text-white">
            <Link href="/login">
              <p className="text-center font-bold">Login</p>
            </Link>
          </li>
          <li className="bg-secondary hover:bg-hover rounded-3xl p-2 text-white">
            <Link href="" className="text-center">
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
                <li className="bg-buttons hover:bg-hover rounded-3xl p-2 hover:text-white">
                  <Link href="/login">
                    <p className="text-center font-bold">Login</p>
                  </Link>
                </li>
                <li className="bg-buttons hover:bg-hover rounded-3xl p-2 hover:text-white">
                  <Link href="" className="text-center">
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
