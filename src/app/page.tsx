import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Link from "next/link";
import { Menu } from "./componentes/menu";
import { Corpo } from "./componentes/corpo";

export default function Home() {
  return (
    <>
    <main>
          <div className="cabecalho">
            <Menu>CHOOSE YOUR WEAPON</Menu>
          </div>


            <div className="gaveta-acesso">
              <Link href='/cadastro' className="botao_foco a_frente">FILIE-SE</Link>
            </div>
          
          <Corpo>
            Aqui vai a tabela de jogos
          </Corpo>
            <video src="https://www.pexels.com/pt-br/download/video/7849757/" className="video-bg" autoPlay muted loop></video>
      </main>
    </>
  );
}
