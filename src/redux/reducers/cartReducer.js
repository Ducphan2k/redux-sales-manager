import actionTypes from "../actions/actionTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.cart.ADD_TO_CART:
      //ktra state có id của action.payload.product.id ==> nếu như có ==> update qty + 1
      //nếu state chưa có id của action.payload.product.id => thêm 1 object mới, qtity = 1
      /**
       * [
       * {id: 1, quantityInCart: 1}, ==> index = 0 => prevState[0].
       * {id: 2, quantityInCart: 1}
       * ]
       * @date 8/11/2023 - 9:30:31 PM
       *
       * @type {*}
       */
      const foundIndex = state.findIndex(
        (product) => product.id === action.payload.product.id
      );

      if (foundIndex >= 0) {
        const prevState = [...state];
        prevState[foundIndex].quantityInCart =
          state[foundIndex].quantityInCart + action.payload.quantityInCart;
        return prevState;
      }

      return [
        ...state,
        {
          ...action.payload.product,
          quantityInCart: action.payload.quantityInCart,
        },
      ];

    case actionTypes.cart.DELETE_CART_ITEM:
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);

    case actionTypes.cart.DELETE_ALL_CART:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
