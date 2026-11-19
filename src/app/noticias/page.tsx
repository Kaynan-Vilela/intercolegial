import Link from "next/link";
import { Menu } from "../componentes/menu";
import { Cabecalho } from "../componentes/cabecalho";
import { Corpo } from "../componentes/corpo";
import { Gaveta } from "../componentes/acesso";

export default function Noticias(){
    return(
     <main>
        <Cabecalho>
            <Menu>PROMETA</Menu>
        </Cabecalho>
        
        <Corpo titulo="NOVIDADES">
            Teste
        </Corpo>
     </main>
    )
}