import actionTypes from "../redux/actions/actionTypes";

export const increaseProductInStockForAll = (cartItems) => {
  return (dispatch) => {
    cartItems.forEach((item) => {
      dispatch({
        type: actionTypes.product.INCREASE_PRODUCT_IN_STOCK,
        payload: {
          id: item.id,
          quantityToIncrease: item.quantityInCart,
        },
      });
    });
  };
};
