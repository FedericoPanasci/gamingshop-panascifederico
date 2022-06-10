import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../app/Provider";
import "../ItemCount/styles/styles.css";

const ItemCount = ({ prod, stock }) => {
  const [cant, setCant] = useState(0);
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    <div>
      <p>se ha agregado con exito</p>
    </div>;
    return () => {};
  }, [state]);

  const [count, changeCount] = useState(0);

  const descontar = () => {
    if (count > 0) {
      changeCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      changeCount(count + 1);
    }
  };

  console.log(state.prods.length);

  return (
    <>
      <div>
        {cant === 0 ? (
          <div className="container">
            <button onClick={descontar}>-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {cant === 0 ? (
          <button
            className="centrado"
            onClick={() => {
              setCant(cant+1);
              // quiero guardar el item en el context cart
              setState({...state, prods: [...state.prods, {name: prod.name, id: prod.id}]});
              console.log(prod);
              console.log(cant);
              // console.log(state.name);
            }}
          >
            Agregar al carrito
          </button>
        ) : (
          <div>
            <p>
              Gracias por su visita, continuar compra en{" "}
              <a href="/Carrito">carrito</a>
            </p>
            <p>
              o regrese al <a href="/">inicio</a>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemCount;
