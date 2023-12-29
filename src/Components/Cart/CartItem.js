import dataGoods from "../../Data/dataGoods";
import {
  removeItemFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ cartItem }) {
  const goods = dataGoods.find((item) => item.id === cartItem.goodId);
  const dispatch = useDispatch();
  return (
    <div className="goodAll">
      <img
        className="goodimg"
        src={`/images/${goods.img}.jpeg`}
        alt="cartItemPic"
      />
      <div className="goodInfoCart">
        <h3 className="goodText">{goods.name}</h3>
        <div className="goodBtns">
          <button
            className="minusCart btnCart"
            onClick={() => dispatch(decreaseQuantity(cartItem.id))}
          >
            -
          </button>
          <span className="goodText">{cartItem.quantity} pcs</span>
          <button
            className="plusCart btnCart"
            onClick={() => dispatch(increaseQuantity(cartItem.id))}
          >
            +
          </button>
        </div>

        <h3 className="goodText">Price: $ {goods.price * cartItem.quantity}</h3>
        <img
          onClick={() =>
            dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
          }
          className="deleteBtn"
          width="30"
          height="30"
          src="https://img.icons8.com/glyph-neue/64/e30613/trash.png"
          alt="trash"
        />
      </div>
    </div>
  );
}

export default CartItem;
