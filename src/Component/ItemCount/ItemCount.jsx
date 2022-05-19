import { useState } from "react";
import '../ItemCount/styles/styles.css';

const ItemCount = ({stock}) => {

  const [count, changeCount] = useState(0);

  const descontar = () => {
    if (count > 0) {
      changeCount(count - 1);
    }
  }
  
  const sumar = () => {
    if (count < stock) {
      changeCount(count + 1);
    }
  }

  return <>
    <div className="container">
      <button onClick={descontar}>-</button>
      <p>{count}</p>
      <button onClick={sumar}>+</button>
    </div>
    <div >
      <button className="centrado" /*onClick={addCart}*/>Agregar al carrito</button>
    </div>
  </>
}

export default ItemCount;
