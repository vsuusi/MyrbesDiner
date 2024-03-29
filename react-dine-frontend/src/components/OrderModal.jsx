import { Link } from 'react-router-dom';
import './OrderModal.css'

const OrderModal = ({closeModalProp}) => {

    return (
        <div className="order-modal-bg">
            <div className="order-modal-container">
                <div className="order-modal-title">
                    <h3>Your order has been placed succesfully!✅</h3>
                </div>
                <div className="order-modal-footer">
                    <Link to="/">
                        <button onClick={() => {closeModalProp(false)}}>Return to main page</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default OrderModal;