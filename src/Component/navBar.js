import CartWidget from "./cartWidget";
import ListContainer from "./Container/listContainer";

const NavBar = () => {
    const navStyle= {color:"red", backgroundColor:"yellow", width:100};

    return (
        <div style={{navStyle}}>
        <CartWidget />
        <ListContainer />
        </div>
    )
}

export default NavBar;