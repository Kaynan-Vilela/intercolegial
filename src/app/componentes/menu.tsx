import Link from "next/link";

export function Menu({children}){
    return(
     <nav>
      <div className="bg-padrao"></div>
        <span className="saudacao">{children}</span>

        <br />
        <Link href='/' className="links">INÍCIO</Link>
        <Link href='noticias' className="links">ACOMPANHE</Link>
        <Link href='suporte' className="links">SUPORTE</Link>
        <br />
      </nav>
    )
}