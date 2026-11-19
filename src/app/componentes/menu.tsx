import Link from "next/link";
import { Bebas_Neue, Barlow_Condensed} from "next/font/google";
import { BotaoNav } from "./botao-navegacao";


const bebas = Bebas_Neue({
  weight: "400"
});

export function Menu({children}:any){
    return(
     <nav>
        <span className="saudacao">{children}</span>

        <div className="opcoes">
          <BotaoNav destino="/">INÍCIO</BotaoNav>
          <BotaoNav destino="/noticias">ACOMPANHE</BotaoNav>
          <BotaoNav destino="/suporte">AJUDA</BotaoNav>
        </div>
      </nav>
    )
}