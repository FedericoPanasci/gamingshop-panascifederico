import { useContext } from "react";
import { AppContext } from "../app/Provider";
import NavBar from "../Component/navBar";

const Carrito = () => {
  const [state, useState] = useContext(AppContext);
    
    return (
    <> 
        <NavBar />
        <div>
            <h1>
                este es el carrito
            </h1>
            <div> {state.prods.map((p) => <p key={p.id}>{p.name}</p>) }</div>

        </div>
    </>
    )
}

export default Carrito;