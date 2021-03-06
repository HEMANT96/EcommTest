//Dependencies
import React, { Component } from 'react';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
//import { Icon } from 'react-materialize';
//Internals
import PRODUCTS from '../Data';
import './index.css';

class ShowProduct extends Component {
  render () {
    const product = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);
    const currentProduct = product;
    return (
      <div className="show-product">
        <div className="item-wrapper">
          <div className="item-image">
            <img className="product-image" src={currentProduct.img} alt="product" />
          </div>
          <div className="item-name">
            <div className="product-info">
              <h3 id="product-name">{currentProduct.name}</h3>
            </div>
            <div className="product-bio">
              <p id="product-description">{currentProduct.description}</p>
              <p id="product-price">${currentProduct.price}</p>
              <p small id="add-icon">add_shopping_cart</p>
            </div>
            <div className="product-review">
              <div className="stars">
                <p small id="add-icon">star</p>
                <p small id="add-icon">star</p>
                <p small id="add-icon">star</p>
                <p small id="add-icon">star</p>
                <p small id="add-icon">star_half</p>
              </div>
            </div>
          </div>
        </div>
        <div className="similar-products">
          <h5>You might also like</h5>
          {PRODUCTS.map((product) => {
            if (
              product.gender === currentProduct.gender
              && product.type === currentProduct.type
              && product.name !== currentProduct.name) {
              return(
                <Link to={`/products/${product.id}`}>
                  <div key={product.id} className="item">
                    <Link to={`/products/${product.id}`}>
                    <div className="product-img">
                      <img alt={product.name} src={product.img} />
                    </div>
                    <div className="product-details">
                      <h1 id="product-name">{product.name}</h1>
                      <h4 id="product-description">{product.description}</h4>
                    </div>
                    </Link>
                    <div className="price-add">
                      <h5 id="product-price">${product.price}</h5>
                      <p small id="add-icon">add_shopping_cart</p>
                    </div>
                  </div>
                </Link>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

export default ShowProduct;
