import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    return (<div>
        {items.map(prod => {
            return <Item key={prod.id} name={prod.name} stock={prod.stock} />
        })}
    </div>
    )
}

export default ItemList;