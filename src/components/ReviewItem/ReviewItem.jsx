import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({product, handleRemoveFromCart}) => {
    const { name, quantity, price, id, img } = product;
    return (
        <div className='review-item'>  
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span>${price}</span></p>
                <p>Quantity: <span>{quantity}</span></p>
                
            </div>
            <button onClick={()=>handleRemoveFromCart(id)}>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;