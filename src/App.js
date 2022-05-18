import Box from "./Component/Box/Box/Box";
// import Item from "./Component/ItemCount/Item";
import ItemCount from "./Component/ItemCount/ItemCount";
import ItemList from "./Component/ItemCount/itemList";
import NavBar from "./Component/navBar";

const App = () => {
  return (
    <>
    <NavBar />
    <Box/>
    <ItemCount/> 
    <ItemList/>
    </>
  )
}

export default App;