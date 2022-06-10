import { Link } from 'react-router-dom';
import '../../Styles/styles.css';

const ListContainer = () => {
    return (
        <ul className='list-navbar'>
            <li className='item-nav'><Link to="/">Home</Link></li>
            <li className='item-nav'><Link to="/Consolas">Consolas</Link></li>
            <li className='item-nav'><Link to="/Juegos">Juegos</Link></li>
            <li className='item-nav'><Link to="/Accesorios">Accesorios</Link></li>
            <li className='item-nav'><Link to="/Carrito">Carrito</Link></li>

        </ul>
    )
}
export default ListContainer;