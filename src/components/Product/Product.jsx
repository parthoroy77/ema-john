import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, seller, img, price, ratings, quantity } = props.product;
  return (
    <div className="product">
        <img src={img} alt="" />
        <div className="product-info">
            <h6>{name}</h6>
            <p className="price">Price: ${price}</p>
            <p className="other-info">Manufacturer: {seller}</p>
            <p className="other-info">Rating: {ratings} Stars</p>
        </div>
        <button className="btn-cart">Add To Cart</button>
    </div>
  );
};

export default Product;
