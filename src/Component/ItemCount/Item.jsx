import React from 'react';
import ItemCount from './ItemCount';

const Item = ({id, prod}) => {
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