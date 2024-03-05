import { legacy_createStore as createStore } from 'redux';

// Step1:   Reducer Function 
const bankReducer = (state, action) => 
{
    // Convert action type to upper case
    action.type = action.type.toUpperCase();    

    //alert(action.type);
    let  updatedState = {};

    switch (action.type) 
    {
        case "CREATE":
            updatedState.balance =  0;   
            break; 

        case "DEPOSIT":
        
                updatedState.balance =  state.balance + 1;
            break;
            
        case "WITHDRAW":
            if(state.balance  < 1) 
            {
                alert("Nothing is cart");
                updatedState.balance =  state.balance;
            }
            else
            {
                updatedState.balance =  state.balance - 1;
            }
            break;
        default:
           updatedState = state;
           break;
      }

      return updatedState;
};

// Step2:  Create Store
const shopStore = createStore(bankReducer);
export default shopStore;