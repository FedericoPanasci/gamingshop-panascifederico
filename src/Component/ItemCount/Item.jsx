import React from 'react';
import ItemCount from './ItemCount';

const Item = ({id, name, stock}) => {
    return (
        <div id={id}>
            <h6 className="container" >{name}</h6>
            <ItemCount stock={stock} />
        </div>
    )
}

export default Item;