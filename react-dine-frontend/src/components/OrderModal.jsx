import { Link } from 'react-router-dom';
import './OrderModal.css'

const OrderModal = ({closeModalProp}) => {

    return (
        <div className="modal-bg">
            <div className="modal-container">
                <div className="modal-title">
                    <h3>Order complete!</h3>
                </div>
                <div className="modal-body">
                    <p> Your order has been completed succesfully!</p>
                </div>
                <div className="modal-footer">
                    
                        <button onClick={() => {closeModalProp(false)}}>Return to main page</button>
                    
                </div>
            </div>
        </div>
    )
};

export default OrderModal;