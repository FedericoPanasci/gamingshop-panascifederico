import RoutesConfig from "./app/RoutesConfig";
import styles from '../src/Styles/styles.css';
import Provider from "./app/Provider";

const App = () => {
return(
    <>
        <Provider>
        <RoutesConfig />
        </Provider>
    </>
    )
}

export default App;