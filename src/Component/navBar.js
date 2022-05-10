import CartWidget from "./cartWidget";
import ListContainer from "./Container/listContainer";
import '../Styles/styles.css';

const NavBar = () => {
    return (
        <>
        <div className="nav navBar">
        <CartWidget />
        <ListContainer />
        </div>
        </>
    )
}

export default NavBar;