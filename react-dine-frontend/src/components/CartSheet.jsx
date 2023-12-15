import './CartSheet.css'

import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Trash } from '@phosphor-icons/react';
import { ToastContainer, toast } from 'react-toastify';
import CartModal from "./CartModal";
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
                position="top-right"
                autoClose={2000}
                limit={2}
                theme="light"/>
       
        <div className='cart-item-container'>
            {cartItems.length===0 ? <h2 className='cart-empty-title'>Cart is empty</h2> : 
            <ul>
                {cartItems.map((item, index) => (
                <li key={index}>
                    <div className="cartItemDiv">
                        <img className="cartImg" src={item.image}/>
                        <h4>{item.name}</h4>
                        <p>{item.quantity}</p>
                        <p>{item.price}€</p>
                        <div className="cart-count-buttons">
                            <button onClick={() => addToCart(item)}>+</button>
                            <button onClick={() => removeFromCart(item)}>-</button>
                        </div>
                    </div>
                </li>
                ))}
            </ul>}
        </div>
        {cartItems.length !== 0 && <h2 className="cart-total">Total: {cartTotalPrice().toFixed(2)}€</h2>}
        <div className="cart-footer">
            <Link to="/"><button>Continue Shopping</button></Link>
            <button onClick={() => checkoutHandler()}>Checkout</button>
            <button onClick={emptyCart}>Empty cart <Trash size={28}/></button>
        </div>
        {modalState && <CartModal closeModalProp={setModalState}/>}
    </>
    )
};

export default CartSheet;