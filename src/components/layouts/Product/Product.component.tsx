import React, { FunctionComponent } from "react";

import { ProductProps } from "./types";

import "./product.css";

const Product: FunctionComponent<ProductProps> = ({
  productLink,
  productDescription,
  productImage,
  product2Link,
  product2Image,
  product2Description,
  product3Link,
  product3Image,
  product3Description,
  product4Link,
  product4Image,
  product4Description,
}) => {
  return (
    <div className="products-row">
      <div className="double-products">
        <div id="product1" className="product">
          <a className="product-link" href={productLink}>
            <img className="product-image" src={productImage} alt="Product 1" />
          </a>

          <span className="product-description">{productDescription}</span>
        </div>

        <div id="product2" className="product">
          <a className="product-link" href={product2Link}>
            <img
              className="product-image"
              src={product2Image}
              alt="Product 2"
            />
          </a>

          <span className="product-description">{product2Description}</span>
        </div>
      </div>

      <div className="double-products">
        <div id="product1" className="product">
          <a className="product-link" href={product3Link}>
            <img
              className="product-image"
              src={product3Image}
              alt="Product 1"
            />
          </a>

          <span className="product-description">{product3Description}</span>
        </div>

        <div id="product2" className="product">
          <a className="product-link" href={product4Link}>
            <img
              className="product-image"
              src={product4Image}
              alt="Product 2"
            />
          </a>

          <span className="product-description">{product4Description}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
