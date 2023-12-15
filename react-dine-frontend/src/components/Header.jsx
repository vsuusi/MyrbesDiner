import "./Header.css";
import { Link } from 'react-router-dom';
import { ShoppingCart } from "@phosphor-icons/react"
import { useCart } from "../context/CartContext";

const Header = () => {
    const { cartTotalItems } = useCart();

    return (
        <div className="header-container">
            <div className="header-title">
                <Link to={`/`}>
                    <h1> Myrbes Diner </h1>
                </Link>
            </div>
            <div className="header-cart">
                <Link to={`/cart`}>
                    <ShoppingCart size={40}/>
                </Link>
            </div>
            <div className="header-number">
                    <h4>{cartTotalItems()}</h4>
            </div>
        </div>
    )
};

export default Header;