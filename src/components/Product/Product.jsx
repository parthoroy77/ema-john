import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { id, name, seller, img, price, ratings, quantity } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p className="price">Price: ${price}</p>
        <p className="other-info">Manufacturer: {seller}</p>
        <p className="other-info">Rating: {ratings} Stars</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add To Cart 
        <FontAwesomeIcon icon={faShoppingCart}/>
      </button>
    </div>
  );
};

export default Product;
