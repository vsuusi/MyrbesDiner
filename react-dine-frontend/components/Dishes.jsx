import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Dishes.css';

const Dishes = () => {
    const [dishes, setDishes] = useState([]);

    const addToCartHanlder = (dish) => {
        console.log(dish + " added to cart");
    };


    useEffect(() => {
        fetch("http://localhost:5000/api/dishes", {
            method: "GET"
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setDishes(data);
         })
        .catch(error => {
            console.error("Error: ", error)
        })
    }, []);

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
                                <button onClick={() => addToCartHanlder(dish.name)}>Add to cart</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
    )
};

export default Dishes;