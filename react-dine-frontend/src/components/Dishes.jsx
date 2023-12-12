import { useState, useEffect } from "react";
import './Dishes.css';
import Loader from "./Loader";
import { useCart } from "../context/CartContext";

const Dishes = () => {
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState([true]);
    const { cartItems, addToCart } = useCart();

    const addToCartHanlder = (dish) => {
        addToCart(dish);
    }

    useEffect(() => {
        fetch("http://localhost:5000/api/dishes", {
            method: "GET"
        })
        .then((response) => response.json())
        .then((data) => {
            setDishes(data);
            setLoading(false);
         })
        .catch(error => {
            console.error("Error: ", error)
        })
    }, []);
    
    if (loading) {
        return <Loader/>
    }

    return (           
        <ul>
            {dishes.map(dish => (
                <li key={dish.id}>
                    <div className="dishdiv">
                        <div className="dishdiv-front">
                            <img className="img-front" src={`http://localhost:5000/${dish.image}`} alt={dish.name}/>
                            <h4>{dish.name}</h4>
                            <p>{dish.price}€</p>
                        </div>
                        <div className="dishdiv-back">
                            {/* ADD IMAGE HERE???? */}
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                            <h4>{dish.price}€</h4>
                            <button onClick={() => addToCartHanlder(dish)}>+ Add to Cart</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
};

export default Dishes;