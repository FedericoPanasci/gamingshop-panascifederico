import CartWidget from "./cartWidget";
import ListContainer from "./Container/listContainer";
// import RoutesConfig from "../app/RoutesConfig.js";
import '../Styles/styles.css';

const NavBar = () => {
    return (
        <>
        <div className="nav navBar">
        <CartWidget />
        <ListContainer />
        {/* <RoutesConfig/> */}
        </div>
        </>
    )
}

export default NavBar;