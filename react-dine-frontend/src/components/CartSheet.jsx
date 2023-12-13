import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Link } from 'react-router-dom';
import CartModal from "./CartModal";
import './CartSheet.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const CartSheet = () => {
    const { removeFromCart, addToCart, cartItems, emptyCart, cartTotalPrice } = useCart();
    const [modalState, setModalState] = useState(false);

    const checkoutHandler = () => {
        if (cartItems.length === 0){
            toast.error("Your cart is empty!")
        } 
        else {
            setModalState(true);
        }
    }

    return (
    <>
        <ToastContainer
                position="top-center"
                autoClose={2000}
                limit={2}
                theme="light"/>
        <div>
            {cartItems.length===0 ? <h3>Cart is empty</h3> : 
            <ul>
                {cartItems.map((item, index) => (
                <li key={index}>
                    <div className="cartItemDiv">
                        <img className="cartImg" src={`http://localhost:5000/${item.image}`}/>
                        <h4>{item.name}</h4>
                        <p>{item.quantity}</p>
                        <p>{item.price}€</p>
                    </div>
                    <div className="countButtons">
                        <button onClick={() => addToCart(item)}>+</button>
                        <button onClick={() => removeFromCart(item)}>-</button>
                    </div>
                </li>
                ))}
                <h4>Total: {cartTotalPrice().toFixed(2)}€</h4>
            </ul>}
            <div>
                <Link to="/">
                    <button>Continue Shopping</button>
                </Link>
            </div>
            <button onClick={emptyCart}>Empty Cart</button>
        </div>
        <div className="checkoutdiv">
                <button onClick={() => checkoutHandler()}>Checkout</button>
        </div>
        {modalState && <CartModal closeModalProp={setModalState}/>}
    </>
    )
};

export default CartSheet;