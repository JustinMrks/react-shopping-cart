import React from "react";
import { Shopping } from "../App";

// Components
import Product from "./Product";

const Products = () => {
  return (
    <Shopping.Consumer>
      {(values) => (
        <div className="products-container">
          {values.products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addItem={values.addItem}
            />
          ))}
        </div>
      )}
    </Shopping.Consumer>
  );
};

export default Products;
