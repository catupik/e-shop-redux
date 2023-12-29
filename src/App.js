import "./App.css";
import Cart from "./Components/Cart/Cart";
import GoodsInCart from "./Components/Cart/GoodsInCart";
import AllCategories from "./Components/Filter/AllCategories";
import Goods from "./Components/GoodsComponents/Goods";
// import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { useState } from "react";

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false);
  
  const toggleCartVisibility = ()=> {
    setIsCartVisible(!isCartVisible);
  }

  
  

  return (
    
    <div className="App">
      <div className="cat-cart">
        {isCartVisible ? 
        <button onClick={toggleCartVisibility} className="backToShop">Back to E-Shop</button> : <AllCategories />}
        
        <Cart toggleCartVisibility={toggleCartVisibility}/>
      </div>

      {isCartVisible ? <GoodsInCart/> :  <Goods />}
     
    </div>
  );
}

export default App;
