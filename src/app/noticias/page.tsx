import Link from "next/link";
import { Menu } from "../componentes/menu";
import { Cabecalho } from "../componentes/cabecalho";

export default function Noticias(){
    return(
     <main>
        <Cabecalho>
            <Menu>PROMETA</Menu>
        </Cabecalho>
        
        <section className="container">
            Teste
        </section>
     </main>
    )
}