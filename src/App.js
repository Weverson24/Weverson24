import { useState } from "react";
import Formulario from "./componentes/Formulario";
import "./styles.css";

export default function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoColaboradorSalvo = (colaborador) => {
    console.log(colaborador);

    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <Formulario
        aoColaboradorAdd={(colaborador) => aoColaboradorSalvo(colaborador)}
      />
    </div>
  );
}
