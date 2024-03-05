import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Provider } from 'react-redux';
import App from './App';
// import shopStore from './Stores/ShopStore';
import shopStore from './Stores/ShopStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Perform or dispatch an action :  CREATE
shopStore.dispatch({type:"CREATE"});  

root.render(
  <React.StrictMode>
    {/* Step3: Use <Provider/>  to share the store to components */}
     <Provider store={shopStore}>
        <App  />
     </Provider>  
  </React.StrictMode>    
   
);