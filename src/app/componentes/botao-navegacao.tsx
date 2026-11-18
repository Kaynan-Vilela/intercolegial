import Link from "next/link";
import {Bebas_Neue} from "next/font/google";


const bebas = Bebas_Neue({
  weight: "400"
});


export function BotaoNav({ children, destino }:{ children: React.ReactNode; destino: string }){
    return(
        <Link href={destino} className={`${bebas.className} links`}>
            {children}
        </Link>
    );
}