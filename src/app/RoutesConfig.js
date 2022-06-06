import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accesorios from "../Pages/Accesorios";
import Carrito from "../Pages/Carrito";
import Consolas from "../Pages/Consolas";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import Juegos from "../Pages/Juegos";

const RoutesConfig = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Carrito" element={<Carrito/>}></Route>
            <Route path="/Consolas" element={<Consolas />}></Route>
            <Route path="/Juegos" element={<Juegos />}></Route>
            <Route path="/Accesorios" element={<Accesorios />}></Route>
            <Route path="/Accesorios/:id" element={<Detail />}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesConfig;