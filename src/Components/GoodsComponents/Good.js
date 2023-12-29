import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from 'react-redux'
import { addItemToCart } from "../../redux/cartSlice";



function Good({ good }) {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="goodAll">
      <img className="goodimg" src={`/images/${good.img}.jpeg`} alt="good" />
      <div className="goodInfo">
        <h3 className="goodText">{good.name}</h3>
        <h4 className="goodText">Price: $ {good.price}</h4>
        <h5 className="goodText">Brand: {good.brand}</h5>
        <p className="goodText">{good.description}</p>

        <div className="btns">
            <div>
              <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                
            </div>
            <button className="btnAddToCart btn"
            onClick={()=> dispatch(addItemToCart({good, quantity}))}>Add to cart</button>
        </div>
        

      </div>
    </div>
  );
}

export default Good;
