import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import OrderModal from "../components/OrderModal";
import './CheckoutForm.css'
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = () => {
    const { cartItems, cartTotalPrice, emptyCart } = useCart();
    const { register, handleSubmit, formState: { errors },} = useForm();
    const [modalState, setModalState] = useState(false);

    const onSubmit = async (data) => {
        try {
            const orderData = {
                order: {
                    customer: {
                        name: data.firstname + ' ' + data.lastname,
                        email: data.email,
                        street: data.address,
                        'postal-code': data.postalcode,
                        city: data.city
                    },
                items: [
                    {
                        id: cartItems.id,
                        quantity: cartItems.quantity
                    },
                ]
                }
            }

            const response = await fetch("https://myrbes-diner-express-backend.onrender.com/api/orders", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            
            
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log("Order submitted successfully:", responseData);
            setModalState(true);
            toast.success("Order successful!");
            emptyCart();
        
            } catch (error) {
            console.error("Error submitting order:", error.message);
        }
      };

    return (
        
        <div className="container">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                limit={2}
                theme="light"
            />
            <ul>
                <div className="checkout-summary">
                    {cartItems.map((item, index) => (
                        <li key={index}>
                        <div>
                            {item.quantity === 1 ? <p>{item.name} {item.price}€</p> : <p>{item.quantity} x {item.name} á {item.price} €</p>}
                            <p></p>
                        </div>
                    </li>
                    ))}
                    <h4>Total: {cartTotalPrice().toFixed(2)}€</h4>
                    <Link to="/cart">
                        <button>Edit order</button>
                    </Link>
                </div>
            </ul>


            <div className="checkout-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label>First Name:</label>
                        <input type="text" {...register("firstname",{ required: true})}/>
                        {errors.firstname && errors.firstname.type === "required" && (
                            <p className="errorMsg"> First Name is required!</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label>Last Name:</label>
                        <input type="text" {...register("lastname",{ required: true})}/>
                        {errors.lastname && errors.lastname.type === "required" && (
                            <p className="errorMsg"> Last Name is required!</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label>Email:</label>
                        <input type="text" {...register("email",{ required: true, pattern: /@/})}/>
                        {errors.email && errors.email.type === "required" && (
                            <p className="errorMsg"> Email is required!</p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                        <p className="errorMsg">Email is not valid.</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label>Phone number:</label>
                        <input type="number" {...register("phonenumber",{ required: true})}/>
                        {errors.phonenumber && errors.phonenumber.type === "required" && (
                            <p className="errorMsg"> Phonenumber is required!</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label>Address:</label>
                        <input {...register("address",{ required: true})}/>
                        {errors.address && errors.address.type === "required" && (
                            <p className="errorMsg"> Address is required!</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label>City:</label>
                        <input type="text" {...register("city",{ required: true})}/>
                        {errors.city && errors.city.type === "required" && (
                            <p className="errorMsg"> City is required!</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label>Postal Code:</label>
                        <input type="text" {...register("postalcode",{ required: true})}/>
                        {errors.postalcode && errors.postalcode.type === "required" && (
                            <p className="errorMsg"> Postalcode is required!</p>
                        )}
                    </div>
                    <div className="form-control-spec">
                        <label>Special instructions:</label>
                        <textarea type="text" rows="4" {...register("specialinstructions",{ maxLength: 150})}/>
                        {errors.specialinstructions && errors.specialinstructions.type === "maxLength" && (
                            <p className="errorMsg"> Must be under 150 characters!</p>
                        )}
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}

                    <button className="submit-button" type="submit">Place order!</button>
                </form>
            </div>
            {modalState && <OrderModal closeModalProp={setModalState}/>}
        </div>
  )
};

export default CheckoutForm;