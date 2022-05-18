import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const RoutesConfig = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route><Link to="/">home</Link></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesConfig;