import { useEffect, useState } from "react";
import '../ItemCount/styles/styles.css';

const ItemCount = ({stock}) => {
  const [cart, setCart] = useState(0);
  
  useEffect(() => {
    <div>
      <p>se ha agregado con exito</p>
    </div>
    return () => {
    
    }
  }, [cart])
  
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
    <div>
      {cart === 0 ? <div className="container"><button onClick={descontar}>-</button>
      <p>{count}</p>
      <button onClick={sumar}>+</button></div> : ''}
      
    </div>
    <div >
      {
       cart === 0 ? <button className="centrado" onClick={() => {setCart(cart + 1)}}>Agregar al carrito</button>
       : <div><p>Gracias por su visita, continuar compra en <a href="/Carrito">carrito</a></p><p>o regrese al <a href="/">inicio</a></p></div>
}      
    </div>
  </>
}

export default ItemCount;
