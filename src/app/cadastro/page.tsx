import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import { Menu } from "../componentes/menu";

export default function Cadastro() {
  return (
    <main>

      <Menu>GAME ON!</Menu>
      <section className="container">
        <form action="" className="lado_a_lado">

          <div className="card ativo">
            INFORMAÇÕES SOCIAIS
            <label htmlFor="">SEU NOME COMPLETO</label>
            <input type="text" placeholder="Digite aqui"/>
            <label htmlFor="">SEU NOME DE GUERRA</label>
            <input type="text" placeholder="Digite aqui"/>
            <label htmlFor="">SEU RIOT ID</label>
            <input type="text" placeholder="Digite aqui"/>
            <label htmlFor="">SEU NICK DA STEAM</label>
            <input type="text" placeholder="Digite aqui"/>
            <label htmlFor="">SEU NICK DA EPIC</label>
            <input type="text" placeholder="Digite aqui"/>
            <input type="submit" value="CONTINUAR" placeholder="Digite aqui"/>
          </div>


          <div className="card ativo">
            NESTA PLATAFORMA
            <label htmlFor="">CRIE UM LOGIN</label>
            <input type="text" placeholder="Digite aqui"/>
            <label htmlFor="">INFORME UM E-MAIL</label>
            <input type="text" placeholder="Digite aqui"/>
            <label htmlFor="">CRIE UMA SENHA</label>
            <input type="text" placeholder="Digite aqui"/>
            <label htmlFor="">REPITA A SENHA</label>
            <input type="text" placeholder="Digite aqui"/>
            <input type="submit" value="CONTINUAR" placeholder="Digite aqui"/>
          </div>

        <div className="card ativo">
          INFORMAÇÕES LEGAIS
          <label htmlFor="">VOCÊ É ALUNO DE ALGUMA ESCOLA DE CAMPINAS-SP OU CIDADES PRÓXIMAS?</label>
          <input type="text" placeholder="Digite aqui o nome completo da escola"/>
          <label htmlFor="">SUA DATA DE NASCIMENTO</label>
          <input type="text" placeholder="DD / MM / AAAA"/>
          <label htmlFor="">INFORME O CPF</label>
          <input type="text" placeholder="Sem pontuação ou dígitos"/>
          <label htmlFor="">INFORME O RA NA ESCOLA</label>
          <input type="text" placeholder="Sem pontuação ou dígitos"/>
          <input type="submit" value="FINALIZAR" placeholder="Digite aqui"/>
        </div>

      </form>
      </section>
    </main>
  );
}
