import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Link from "next/link";
import { Menu } from "./componentes/menu";
import { Corpo } from "./componentes/corpo";
import { Gaveta } from "./componentes/acesso";
import { BotaoNav } from "./componentes/botao-navegacao";

export default function Home() {
  return (
    <>
    <main>
          <div className="cabecalho">
            <Menu>CHOOSE YOUR WEAPON</Menu>
          </div>
          
          <Corpo titulo="TABELA">
            <Gaveta>
              <Link href='/cadastro' className="botao_foco a_frente">ACESSO</Link>
            </Gaveta>
            Aqui vai a tabela de jogos
          </Corpo>
          
          <div className="bg-overlay"></div>
            <video src="https://www.pexels.com/pt-br/download/video/7849757/" className="video-bg" autoPlay muted loop></video>
      </main>
    </>
  );
}
