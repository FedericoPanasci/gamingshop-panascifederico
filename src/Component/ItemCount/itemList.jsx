import Item from "./Item";

const ItemList = (Item) => {
    const data = Item.map(p => <h1 key={p.id}>{p.name}</h1>)
    return (
        <div>
            {
                data
            }
        </div>
    )
}

export default ItemList;