import React from "react";

const ProductDetail = ({ price, quantity, title }) => {
  return (
    <div>
      {title} - ${price}
      {quantity > 0 ? ` x ${quantity}` : null}
    </div>
  );
};

export default ProductDetail;
