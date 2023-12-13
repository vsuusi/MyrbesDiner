import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartModal.css'

const CartModal = ({closeModalProp}) => {
    const { cartItems, cartTotalPrice } = useCart();

    return (
        <div className="cart-modal-bg">
            <div className="cart-modal-container">
                <div className="cart-modal-title">
                    <h2>Your order:</h2>
                </div>
                <div className="cart-modal-body">
                        <ul>
                        {cartItems.map((item, index) => (
                        <li key={index}>
                            <div className="cart-modal-list-item">
                                <p>{item.quantity}x</p>
                                <p>{item.name}</p>
                                <p>{item.price}€</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                    <h4>Total: {cartTotalPrice().toFixed(2)}€</h4>
                </div>
                <div className="cart-modal-footer">
                    <Link to="/checkout">
                        <button onClick={() => {closeModalProp(false)}}>
                            Continue
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default CartModal;