import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom';
import './CartSheet.css'
 
const CartSheet = () => {
    const { removeFromCart, addToCart, cartItems, emptyCart, cartTotalPrice } = useCart();

    return (
    <>
        
        <div>
            {cartItems.length===0 ? <h3>Cart is empty</h3> : 
            <ul>
                {cartItems.map((item, index) => (
                <li key={index}>
                    <div className="cartItemDiv">
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
            <Link to="/checkout">
                <button>Checkout</button>
            </Link>
        </div>
    </>
    )
};

export default CartSheet;