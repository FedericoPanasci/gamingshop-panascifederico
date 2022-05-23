import React from 'react';
import ItemCount from './ItemCount';

const Item = ({id, name, stock}) => {
    return (
        <div id={id} className="border">
            <h2 className="container" >{name}</h2>
            <ItemCount stock={stock} />
        </div>
    )
}

export default Item;