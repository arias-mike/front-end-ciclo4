import React, {useState, useRef} from "react";

function Prueba(){
  const txtMensaje = useRef()
  const [valor, setValor] = useState("")

  const mostrar = () =>{
    setValor(txtMensaje.current.value)
  }

  return (
    <div>
      <input
        type="text"
        ref={txtMensaje}
        onChange={mostrar}
      />
      {valor}
    </div>
    
  );
}
export default Prueba