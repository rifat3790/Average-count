
// import './App.css'
import { useState } from 'react'
import Carts from './Components/Carts/Carts'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [selectName, setSelectName] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(20000);
  // const [remove, setRemove] = useState([]);

  let Budget = 20000;

  const handleAdd = (cart) => {
    // console.log("Added successfully");
    // console.log(cart);
    // const newSelectName = [...selectName,cart];
    const isExists = selectName.find(name => name.id == cart.id);

    let temp = cart.salary
    // console.log(temp);
    if(isExists) {
      toast.warn('🦄 Already booked. Please try again another.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      // return alert("Already booked. Please try again another.")
    }
    else{
      
      selectName.forEach(salary => {
        temp += salary.salary;
      });

      const remain = Budget - temp;
      if(remain < 0){
        toast.warn('🦄 Not enough balance.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        // return alert("Not enough balance.")
      }
      else{
        setRemaining(remain);
        setTotalCost(temp);
        setSelectName([...selectName, cart]);
      }
    }
  }

  const handleRemove = (remove) => {
    const updatedSelectName = selectName.filter(cart => cart.id !== remove.id);
  
    const newTotalCost = updatedSelectName.reduce((total, cart) => total + cart.salary, 0);
    const newRemaining = Budget - newTotalCost;
  
    setSelectName(updatedSelectName);
    setTotalCost(newTotalCost);
    setRemaining(newRemaining);
  };
  
  

  

  return (
    <>
      
      <h1>Hello world!</h1>
      <Carts remaining={remaining} totalCost={totalCost} selectName={selectName} handleAdd={handleAdd} handleRemove={handleRemove}></Carts>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
