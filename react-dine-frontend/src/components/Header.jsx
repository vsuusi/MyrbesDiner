import "./Header.css";
import { Link } from 'react-router-dom';
import { ShoppingCart } from "@phosphor-icons/react"
import { useCart } from "../context/CartContext";

const Header = () => {
    const { cartTotalItems } = useCart();

    return (
        <div className="headercontainer">
            <Link to={`/`}>
                <h1> Myrbes Diner </h1>
            </Link>
            <div className="cartandtotal">
                <Link to={`/cart`}>
                    <ShoppingCart size={45}/>
                </Link>
                <div className="totalnumber">
                    <p>{cartTotalItems()}</p>
                </div>
            </div>
        </div>
    )
};

export default Header;