import { getCartItems, getTotalPrice, clearCart } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from 'react-redux';


function GoodsInCart() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();
    const handleCheckout = ()=>{
        dispatch(clearCart());
        alert("Thank you for your purchase! (development continues)")
    }

    return(
        <div>
            {totalPrice!== 0 && <h2>TOTAL: ${totalPrice}</h2>}
            { totalPrice === 0 && <p>Your cart is empty</p>}
            { totalPrice !== 0 && <button 
            onClick={handleCheckout} className="checkoutBtn">Checkout</button>}
            {cartItems.map(cartItem =>  <CartItem key={cartItem.id} cartItem={cartItem}/>)}
           
        </div>
    )
}

export default GoodsInCart;