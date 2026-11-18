import Link from "next/link";
import { Menu } from "../componentes/menu";
import { Cabecalho } from "../componentes/cabecalho";
import { Corpo } from "../componentes/corpo";

export default function Suporte(){
    return(
     <main>
        <Cabecalho>
            <Menu>SUPORTE </Menu>
        </Cabecalho>

        <Corpo>Teste</Corpo>
     </main>
    )
}