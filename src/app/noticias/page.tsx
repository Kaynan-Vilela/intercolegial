import Link from "next/link";
import { Menu } from "../componentes/menu";
import { Cabecalho } from "../componentes/cabecalho";
import { Corpo } from "../componentes/corpo";

export default function Noticias(){
    return(
     <main>
        <Cabecalho>
            <Menu>PROMETA</Menu>
        </Cabecalho>
        
        <Corpo>
            Teste
        </Corpo>
     </main>
    )
}