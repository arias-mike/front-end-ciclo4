import React, { useState, useEffect } from "react";

function UseEffectEx(){
    const [valor, setValor] = useState("Hola")
    
    useEffect(() =>{
        if (valor !== "Hola") {
            alert("La variable acaba de cambiar")
        }
    }, [valor])

    const cambiar = () =>{
        setValor("Hola, Como esta?")
    }
    return(
        <div>
            <button onClick={cambiar}>Cambiar</button><h4>{valor}</h4>
        </div>
    )
    
}
export default UseEffectEx