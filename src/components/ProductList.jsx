import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
import axios from "axios";
// function addToCart(product) {
//   return {type: actionTypes.cart.ADD_TO_CART, payload: {product, quantityInCart: 1}}
// }

const ProductsList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({
      type: actionTypes.cart.ADD_TO_CART,
      payload: { product, quantityInCart: 1 },
    });
    dispatch({
      type: actionTypes.product.DECREASE_PRODUCT_IN_STOCK,
      payload: { product },
    });
  };

  useEffect(() => {
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
  }, []);

  const productReducer = useSelector((state) => state.productReducer);

  return (
    <div>
      <h3>Products</h3>

      {productReducer.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductsList;
