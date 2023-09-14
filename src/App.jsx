
// import './App.css'
import { useState } from 'react'
import Carts from './Components/Carts/Carts'

function App() {

  const [selectName, setSelectName] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState([]);

  let Budget = 20000;

  const handleAdd = (cart) => {
    // console.log("Added successfully");
    console.log(cart);
    // const newSelectName = [...selectName,cart];
    const isExists = selectName.find(name => name.id == cart.id);

    let temp = cart.salary
    // console.log(temp);
    if(isExists) {
      return alert("Already booked. Please try again another.")
    }
    else{
      setSelectName([...selectName, cart]);
      selectName.forEach(salary => {
        temp += salary.salary;
      });
      setTotalCost(temp);
    }
  }
  

  

  return (
    <>
      
      <h1>Hello world!</h1>
      <Carts totalCost={totalCost} selectName={selectName} handleAdd={handleAdd}></Carts>
    </>
  )
}

export default App
