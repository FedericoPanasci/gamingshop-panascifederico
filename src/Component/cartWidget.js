import { useEffect } from "react";
import imgcart from "../Assets/shopping-cart.png";
import '../Styles/styles.css';

const CartWidget = (props) => {
    let cart = 0;
    // addCart = (e) => {
    //     console.log("llego el click")
    // }

    useEffect(() => {
        cart++;
    }, [props.param])
    return <> 
    <img className="logo" src={imgcart} alt="imagen de carrito"/>
    <p>{cart}</p>
    </>
}
export default CartWidget;