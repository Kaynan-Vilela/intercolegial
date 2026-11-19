import Link from "next/link";
import { Menu } from "../componentes/menu";
import { Cabecalho } from "../componentes/cabecalho";
import { Corpo } from "../componentes/corpo";
import { Gaveta } from "../componentes/acesso";

export default function Suporte(){
    return(
     <main>
        <Cabecalho>
            <Menu>SUPORTE </Menu>
        </Cabecalho>

        <Corpo titulo="SUPORTE">
            Aqui vai a assistência do jogador
        </Corpo>
     </main>
    )
}