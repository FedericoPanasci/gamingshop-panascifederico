import React, { useContext } from 'react';
import { AppContext } from '../../app/Provider';
import ItemCount from './ItemCount';

const Item = ({id, prod}) => {
    const [state, setState] = useContext(AppContext);
    return (
        <div id={id} className="contenedor">
            <h2 className="title" >{prod.name}</h2>
            <img src={prod.imagen} alt={prod.title} className="imagen-item"/>
            <p>{prod.descripcion}</p>
            <ItemCount prod={prod} stock={prod.stock} />
            <p>Stock disponible: {prod.stock}</p>
        </div>
    )
}

export default Item;