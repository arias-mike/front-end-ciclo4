import React, { useState } from "react";

function UseStateEx(){
    const [valor, setValor] = useState("Hola")
    
    const responder = () =>{
        setValor("Hola, Como esta?")
    }
    return(
        <div>
            <button onClick={responder}>Responder saludo</button><h4>{valor}</h4>
        </div>
    )
    
}
export default UseStateEx