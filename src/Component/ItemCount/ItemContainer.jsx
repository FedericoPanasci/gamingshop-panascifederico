import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemContainer = () => {
    const [prods, setProds] = useState([]);

    useEffect(() => {
        (async () => {
            const promesa = new Promise((acc, rej) => {
                const response = fetch('/prod.json');
                setTimeout(() => {
                    acc(response);
                }, 2000)
            })
            try {
                const respuesta = await promesa;
                const data = await respuesta.json();
                setProds(data.prods);
                //console.log(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (
        <>
          <ItemList items={prods} />
        </>
      )
}
export default ItemContainer;