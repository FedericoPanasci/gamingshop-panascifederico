const Item = (props) => {
    const prods = [{
        id: 1,
        name: "playstation"
    },
    {
        id: 2,
        name: "xbox"
    },
    {
        id: 3,
        name: "sega"
    }
    ]
    const data = prods.map(p => <h1 key={p.id}>{p.name}</h1> )
    return (
        <div>
            {data}
        </div>
    )
}
export default Item;