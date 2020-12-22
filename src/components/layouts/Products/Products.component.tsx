import React, { FunctionComponent } from "react";

import { ProductsProps } from "./types";

import "./products.css";

const Products: FunctionComponent<ProductsProps> = ({
  product1link,
  product1imagesrc,
  product1description,
  product2link,
  product2imagesrc,
  product2description,
  product3link,
  product3imagesrc,
  product3description,
  product4link,
  product4imagesrc,
  product4description,
}) => {
  return (
    <div className="products-row">
      <div className="double-products">
        <div id="product1" className="product">
          <a className="product-link" href={product1link}>
            <img
              className="product-image"
              src={product1imagesrc}
              alt="Product 1"
            />
          </a>

          <span className="product-description">{product1description}</span>
        </div>

        <div id="product2" className="product">
          <a className="product-link" href={product2link}>
            <img
              className="product-image"
              src={product2imagesrc}
              alt="Product 1"
            />
          </a>

          <span className="product-description">{product2description}</span>
        </div>
      </div>

      <div id="product3" className="double-products">
        <div className="product">
          <a className="product-link" href={product3link}>
            <img
              className="product-image"
              src={product3imagesrc}
              alt="Product 1"
            />
          </a>

          <span className="product-description">{product3description}</span>
        </div>

        <div id="product4" className="product">
          <a className="product-link" href={product4link}>
            <img
              className="product-image"
              src={product4imagesrc}
              alt="Product 1"
            />
          </a>

          <span className="product-description">{product4description}</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
