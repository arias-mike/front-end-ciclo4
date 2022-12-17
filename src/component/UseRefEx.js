import React, {useRef} from "react";

function UseRefEx(){
    const txtMensaje = useRef()
    const ver = () =>{
        alert(txtMensaje.current.value)
    }
    return(
        <div>
            <input type="text" ref={txtMensaje}/>
            <button onClick={ver}>Ver mensaje</button>
        </div>
    )
    
}
export default UseRefEx