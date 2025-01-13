"use client";

import Image from "next/image";
import { useState } from "react";
import Botao from "~/app/_components/Botao";

export default function NavBarAdm() {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      <ul className="hidden flex-row space-x-3 md:flex">
        <li>
          <Botao href={"/adm-home"} title={"Home"} />
        </li>
        <li>
          <Botao href={""} title={" Sair "} />
        </li>
      </ul>
      <div
        className={`houver:bg-hover md:hidden`}
        onClick={() => setMenu(!menu)}
      >
        <div id="hamburger" className="flex flex-col space-y-1">
          <div id="menu">
            <Image src="/hamburger.png" alt="Menu" width={30} height={30} />
          </div>
          <div id="menu-mobile" className={`${menu ? "block" : "hidden"}`}>
            <ul className="fixed right-2 top-16 z-10 flex flex-col space-y-3 overflow-hidden rounded-3xl bg-white p-2">
              <li>
                <Botao href={"/adm-home"} title={"Home"} />
              </li>
              <li>
                <Botao href={""} title={" Sair "} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
