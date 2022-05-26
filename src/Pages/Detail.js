import NavBar from "../Component/navBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../Component/ItemCount/Item";

const Detail = () => {
    const { id } = useParams();
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



    //prods.map(p => console.log(p.id))
    const filtro = prods.filter(prod => prod.id === id)
    console.log(id);
    console.log(filtro);

    return (
        <>
            <NavBar />
            <h1>prueba {id}</h1>
            <Item key={filtro.id} prod={filtro} />
        </>
    )
}

export default Detail;