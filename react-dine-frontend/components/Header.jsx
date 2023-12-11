import "./Header.css";
import Cart from "./Cart";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="wrapper">
        <div className="headercontainer">
            <Link to={`/`}>
                <h1> React Diner </h1>
            </Link>
            <Cart/>
        </div>
        </div>
    )
};

export default Header;