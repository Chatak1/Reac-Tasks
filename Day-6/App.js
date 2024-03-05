// import ShopApp from './Components/ShopApp'; 
import ShopApp from "./Components/ShopApp";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './Components/BankApp.css'; 

function App() 
{    
     const [amountValue, setAmount] = useState(0);       

     // Get the global state from store
     let currentBalance = useSelector((state) => state.balance);
   
     const dispatch = useDispatch();
     
     // Step5:  Perform the operations using dispatch
     function deposit_click() { 
        
         dispatch({type:"DEPOSIT", amount:amountValue} );
         setAmount(0);   // clear textbox
     }
 
     function withdraw_click() {        
         dispatch({type:"WITHDRAW", amount:amountValue} );
         setAmount(0);   // clear textbox
     }  

      return(
        <>
      
        <header>
           
            Assignment
        </header>
        <h1>Cart quantity is {(currentBalance)}</h1>
        <div className="atm">
                quantity
                
                <button onClick={deposit_click}>+</button>
                <button onClick={withdraw_click}>-</button>
                
        </div>
             {/* <ShopApp  /> */}
        </>
        );
}

export default App;