import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductDetail from "./ProductDetail";
import actionTypes from "../redux/actions/actionTypes";
import axios from "axios";

const Cart = () => {
  const cartReducer = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({
      type: actionTypes.cart.DELETE_CART_ITEM,
      payload: id,
    });
    dispatch({
      type: actionTypes.product.INCREASE_PRODUCT_IN_STOCK,
      payload: id,
    });
  };

  const handleDeleteAll = () => {
    dispatch({
      type: actionTypes.cart.DELETE_ALL_CART,
    });
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data }) => {
        dispatch({
          type: actionTypes.product.GET_PRODUCT,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.product.FETCH_PRODUCTS_FAILURE,
          payload: error,
        });
      });
  };
  return (
    <div>
      <h3>Your Cart</h3>
      {/* Nodes */}
      {cartReducer.map((cart) => (
        <div key={cart.id}>
          <ProductDetail
            title={cart.title}
            quantity={cart.quantityInCart}
            price={cart.price}
          />
          <button onClick={() => handleDelete(cart.id)}>Delete</button>
        </div>
      ))}
      {/* Total price */}
      <p>
        Total:{" "}
        {cartReducer.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.price * currentValue.quantityInCart;
        }, 0)}
      </p>
      <button onClick={handleDeleteAll}>Delete All</button>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
