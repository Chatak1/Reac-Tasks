import { useState } from "react";

function ProductDetails(){

//event handelling

const [price,setPrice] = useState("");
const [qty,setQty] = useState();
const [res,setRes] = useState();


// function updatePrice(event)
//     {        
//         setPrice(event.target.value);
//     }

//     function updateQty(event)
//     {        
//         setQty(event.target.value);
//     }

function calTotal(){

    let x = price*qty;
    setRes(x);
}


    return(

            <>
            
            <h4>State task -1</h4>

        <form>
           Produnt Name: <input type="text"></input> <br></br>
           Unit Price: <input type="number" onChange={(e)=>setPrice(e.target.value)}></input> <br></br>
          Quantity: <input type="number" onChange={(e)=>setQty(e.target.value)}></input> <br></br>
           
           <input type="submit" value="Get Total" onClick={calTotal}></input>
        </form>
            
            <>Toal Ammount : {res}</>
            
            </>
        
    );
};
export default ProductDetails;