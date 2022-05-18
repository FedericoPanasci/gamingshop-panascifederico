//import { useEffect } from "react";
// import { useEffect } from "react";
import imgcart from "../Assets/shopping-cart.png";
import '../Styles/styles.css';

const CartWidget = (props) => {
    let person = {
        "id": 1,
        "name": "fede"
    }

    const getPerson = async () => {
        const task = await new Promise((resolve, reject) => {
            // setTimeout(console.log(person), 3000);
            console.log("mensaje----");
            return resolve(person);
        })
        console.log(task);
    }


    getPerson();

    //----------------
    //otra forma
    /*
        const algo = async () => {
            try {
                await fetch('url')
            }catch (err){
                log ('el error es', err)
            }
        }
    */
    
    //----------------
    // let cart = 0;
    // // addCart = (e) => {
    // //     console.log("llego el click")
    // // }

    // useEffect(() => {
    //     cart++;
    // }, [props.param])
    return <>
        <img className="logo" src={imgcart} alt="imagen de carrito" />

    </>
}
export default CartWidget;