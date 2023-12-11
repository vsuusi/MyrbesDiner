import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    return(
        <div className="cartcontainer">
            <Link to={`/checkout`}>
                <i className="cart"/>
            </Link>
        </div>
    )
};

export default Cart;