import Link from "next/link";
import {Bebas_Neue} from "next/font/google";


const bebas = Bebas_Neue({
    weight: "400"
});



export function Corpo({ children, titulo }:{ children: React.ReactNode; titulo: string }){
    return(
        <section className={`${bebas.className} corpo`}>
            <div className="cabecalho-pagina">
                <span className="titulo-pagina">{titulo}</span>
            </div>
            <div className="container">
                {children}
            </div>
        </section>
    );
}