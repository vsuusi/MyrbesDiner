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
        addToCart(dish);
        toast.success(dish.name + " added to cart!")
        setIsButtonDisabled(true);
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 2000);

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
    };

    return (           
        <ul>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                limit={2}
                theme="light"
            />
            {dishes.map(dish => (
                <li key={dish.id}>
                    <div className="dishdiv">
                        <div className="dishdiv-front">
                            <img className="img-front" 
                                 src={`http://localhost:5000/${dish.image}`} 
                                 alt={dish.name}/>
                            <h4>{dish.name}</h4>
                            <p>{dish.price}€</p>
                        </div>
                        <div className="dishdiv-back">
                            {/* ADD IMAGE HERE???? */}
                            <h3>{dish.name}</h3>
                            <p>{dish.description}</p>
                            <h4>{dish.price}€</h4>
                            <button onClick={() => addToCartHandler(dish)}
                                    disabled={isButtonDisabled}
                            >+ Add to Cart</button>
                            
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
};

export default Dishes;