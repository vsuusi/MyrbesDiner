import { useState, useEffect } from "react";
import './Dishes.css';
import Loader from "./Loader";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dishes = () => {
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { addToCart } = useCart();

    const addToCartHandler = (dish) => {

        console.log("dish image: " + dish.image);

        addToCart(dish);
        toast.success(dish.name + " added to cart!")
        setIsButtonDisabled(true);
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 2000);

    }

    useEffect(() => {
        fetch("https://myrbes-diner-express-backend.onrender.com/api/dishes", {
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
    };

    return (           
        <ul className="dish-container">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                limit={2}
                theme="light"
            />
            {dishes.map(dish => (
                <li key={dish.id}>
                    <div className="dish-card">
                        <div className="dish-card-front">
                            <div className="dish-card-front-blur-load" style={{ backgroundImage: `url('https://myrbes-diner-express-backend.onrender.com/${dish.image_small}')` }}>
                                <img className="dish-img" 
                                    src={`https://myrbes-diner-express-backend.onrender.com/${dish.image}`}
                                    loading="lazy"/>
                            </div>
                            <h4>{dish.name}</h4>
                            <p>{dish.price}€</p>
                        </div>
                        <div className="dish-card-back">
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                            <h4>{dish.price}€</h4>
                            <button 
                                onClick={() => addToCartHandler(dish)}
                                disabled={isButtonDisabled}>
                                + Add to Cart
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
};

export default Dishes;