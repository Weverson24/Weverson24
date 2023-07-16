import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitar = (e) => {
    props.aoAlterado(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        required={props.obrigatorio}
        value={props.valor}
        onChange={aoDigitar}
      />
    </div>
  );
};

export default CampoTexto;
