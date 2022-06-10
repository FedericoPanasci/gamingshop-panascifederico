//import { useEffect } from "react";
// import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../app/Provider";
import imgcart from "../Assets/shopping-cart.png";
import "../Styles/styles.css";

const CartWidget = () => {
  const [state, useState] = useContext(AppContext);
  return (
    <>
      <img className="logo" src={imgcart} alt="imagen de carrito" />
      <p>{state.prods.length}</p>
    </>
  );
};
export default CartWidget;
