import actionTypes from "../actions/actionTypes";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.product.DECREASE_PRODUCT_IN_STOCK:
      const foundIndex = state.findIndex(
        (product) => product.id === action.payload.product.id
      );
      const prevState = [...state];
      prevState[foundIndex].inventory = state[foundIndex].inventory - 1;
      return prevState;

    case actionTypes.product.INCREASE_PRODUCT_IN_STOCK:
      const foundIndex1 = state.findIndex(
        (product) => product.id === action.payload
      );
      const prevState1 = [...state];
      prevState1[foundIndex1].inventory = 10;
      return prevState1;

   

    case actionTypes.product.GET_PRODUCT:
      const productWithInventory = action.payload.map((e) => {
        e.inventory = 10;
        return e;
      });
      state = productWithInventory;

      return state;

    default:
      return state;
  }
};

export default productReducer;
