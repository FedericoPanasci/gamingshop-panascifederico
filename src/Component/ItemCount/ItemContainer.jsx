import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemContainer = ( props ) => {
    const [prods, setProds] = useState([]);
    // var datos = '';
    // fetch('https://api.mercadolibre.com/sites/MLA/search?q=playstation4&id=MLA1100250699').then(res => res.json())
    // .then(data => {
    //     datos = data.results;
    //     console.log(data.results);
    //     console.log(datos.results);

    //     datos.map(p => console.log(p.id))
    // })

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

    
    console.log(props);
    const propiedad = props.prop;
    let filtro = '';
    if (propiedad === undefined) {
        filtro = prods;
    } else {
        prods.map(p => console.log(p.category))
        filtro = prods.filter(prod => prod.category === propiedad)
        console.log(filtro);
    }
    return (
        <>
        {/* <ItemList items={datos} /> */}
        <ItemList items={filtro} />
        </>
      )
}
export default ItemContainer;