import React from "react";
import ProductDetail from "./ProductDetail";

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <ProductDetail
      title={product.title}
      price={product.price}
      quantity={product.inventory}
    />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory <= 0}
    >
      {product.inventory > 0 ? "Add to cart" : "Sold Out"}
    </button>
  </div>
);

export default ProductItem;
