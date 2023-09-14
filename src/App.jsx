
// import './App.css'
import { useState } from 'react'
import Carts from './Components/Carts/Carts'

function App() {

  const [selectName, setSelectName] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(0);

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
      
      selectName.forEach(salary => {
        temp += salary.salary;
      });

      const remain = Budget - temp;
      if(remain < 0){
        return alert("Not enough balance.")
      }
      else{
        setRemaining(remain);
        setTotalCost(temp);
        setSelectName([...selectName, cart]);
      }
    }
  }
  

  

  return (
    <>
      
      <h1>Hello world!</h1>
      <Carts remaining={remaining} totalCost={totalCost} selectName={selectName} handleAdd={handleAdd}></Carts>
    </>
  )
}

export default App
