import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step:1 get id
    for (const id in storedCart) {
      // get product by usnig id
      const addedProduct = products.find(product => product.id === id)
      // console.log(addedProduct);
      // step: 3 get quantity of the product
      if (addedProduct) {
        const quantity = storedCart[id]
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
    }
    // set the cart 
    setCart(savedCart)
  },[products])

  const handleAddToCart = (product) => {
    let newCart = [];
    // if product new to in the cart , then set quantity = 1
    // if product already exist then set quantity by 1
    const exist = cart.find(pd => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product]
    }
    else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    addToDb(product.id)
  };

  const handleClearCart = () => {
    setCart([])
    deleteShoppingCart()
  }


  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link className="proceed-link" to='./orders'>
            <button className='btn-proceed'>
              Review Order
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
