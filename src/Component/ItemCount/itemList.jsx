import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    return (<div>
        {items.map(prod => {
            return <Item key={prod.id} prod={prod} />
        })}
    </div>
    )
}

export default ItemList;