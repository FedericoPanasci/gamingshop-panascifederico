//import { Test } from './Box.styles';
import { useState } from 'react';


const Box = () => {
const [count, setCount] = useState(0);
const [nueva, setNuevaHora] = useState('');
const [array, setArray] = useState([]);

var hour = new Date();

const incrementar = () => {
  setCount(count+1);
  nuevaHora();
  nuevoArray();
};

const nuevoArray = () => {
  const newArray = {
    newHora: hour.getHours(),
    newMin: hour.getMinutes(),
    newSec: hour.getSeconds()
  }
  setArray(newArray)
}

const nuevaHora = () => {

  let time = '' + hour.getHours();
  time += ':' + hour.getMinutes();
  time += ':' + hour.getSeconds(); 
  setNuevaHora(time);

}

return(
  <>
  <button onClick={incrementar}>Clickme</button>
  <p>{count}</p>
  <p>ultimo momento: {nueva}</p>
  <p>llamo array: {array.newHora}:{array.newMin}:{array.newSec}</p>    
  </>
)
}

export default Box;
