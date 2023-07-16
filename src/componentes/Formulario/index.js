import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import { useState } from "react";
import Botao from "../Botao";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();

    props.aoColaboradorAdd({
      nome,
      cargo,
      imagem
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Coloque aqui o caminho da sua imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Botao item="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;
