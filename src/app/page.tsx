import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Link from "next/link";
import { Menu } from "./componentes/menu";

export default function Home() {
  return (
    <>
      <div className="corpo">
        <Menu>CHOOSE YOUR WEAPON</Menu>
        <div className="gaveta-acesso">
          <Link href='/cadastro' className="botao_foco a_frente">FILIE-SE</Link>
        </div>
      </div>
      <div>
          <video src="https://www.pexels.com/pt-br/download/video/7849757/" className="video-bg" autoPlay muted loop></video>
      </div>
    </>
  );
}
