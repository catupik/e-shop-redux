import { getCartItems, getTotalPrice, clearCart } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import { useState } from "react";

function GoodsInCart() {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckout = () => {
    dispatch(clearCart());
    setIsModalOpen(true);
  };

  return (
    <div>
      {totalPrice !== 0 && <h2>TOTAL: ${totalPrice}</h2>}
      {totalPrice === 0 && <p>Your cart is empty</p>}
      {totalPrice !== 0 && (
        <button onClick={handleCheckout} className="checkoutBtn">
          Checkout
        </button>
      )}
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Thank you for your purchase! (development in progress...)</p>
      </Modal>
    </div>
  );
}

export default GoodsInCart;
