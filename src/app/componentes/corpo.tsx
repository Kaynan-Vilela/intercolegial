import Link from "next/link";
import {Bebas_Neue} from "next/font/google";
import { Gaveta } from "./acesso";


const bebas = Bebas_Neue({
    weight: "400"
});



export function Corpo({ children, titulo }:{ children: React.ReactNode; titulo: string }){

    let breadcrumb = "breadcrumb";

    if (breadcrumb === "breadcrumb") {
        breadcrumb = "";
    }

    return(
        <section className={`${bebas.className} corpo`}>
            <div className="cabecalho-pagina">

                <span className="breadcrumb">{breadcrumb}</span>

                <span className="titulo-pagina">{titulo}</span>

                <Gaveta>
                    <Link href='/login' className="botao_foco a_frente">ACESSO</Link>
                </Gaveta>
            </div>
            <div className="container">
                {children}
            </div>
        </section>
    );
}