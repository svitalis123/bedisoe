import React from 'react';
import { useParams } from 'react-router-dom';
import data from './content';

import '../css/Product.css';

function Product() {
  const { id } = useParams();
  return (
    <div className="product_contaiiner">
      {
        data.filter((ad) => ad.id === id).map((item) => (
          <div key={item.id}>
            <div className="container my-5">
              <div className="row">
                <div className="col-md-5">
                  <div className="main-img">
                    <img className="img-fluid" src={`${item.image}`} alt="ProductS" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="main-description px-2">
                    <div className="category text-bold">
                      Category: Washers
                    </div>
                    <div className="product-title text-bold my-3">
                      $
                      {item.title}
                    </div>

                    <div className="price-area my-4">
                      <p className="old-price mb-1">
                        <del>$100</del>
                        <span className="old-price-discount text-danger">(20% off)</span>
                      </p>
                      <p className="new-price text-bold mb-1">$8</p>
                      <p className="text-secondary mb-1">(ksh 1040)</p>

                    </div>

                    <div className="buttons d-flex my-5">
                      <div className="block">
                        <button type="button" className="shadow btn custom-btn">Add to cart</button>
                      </div>

                      <div className="block quantity">
                        <input type="number" className="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity" />
                      </div>
                    </div>

                  </div>

                  <div className="product-details my-4">
                    <p className="details-title text-color mb-1">Product Details</p>
                    <p className="description">
                      {item.description}
                      {' '}
                    </p>
                  </div>
                  <div className="product-details my-4">
                    <p className="details-title text-color mb-2">keep off children</p>
                    <ul>
                      <li>fluid</li>
                      <li>washer</li>
                    </ul>
                  </div>
                  <div className="product-details my-4">
                    <p className="details-title text-color mb-2">Sold by</p>
                    <ul>
                      <li>Cotton</li>
                      <li>Machine-wash</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="container similar-products my-4">
              <hr />
              <p className="display-5">Similar Products</p>

              <div className="row">
                <div className="col-md-3">
                  <div className="similar-product">
                    <img className="w-100" src="https://source.unsplash.com/gsKdPcIyeGg" alt="Preview" />
                    <p className="title">Lovely black dress</p>
                    <p className="price">$100</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="similar-product">
                    <img className="w-100" src="https://source.unsplash.com/sg_gRhbYXhc" alt="Preview" />
                    <p className="title">Lovely Dress with patterns</p>
                    <p className="price">$85</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="similar-product">
                    <img className="w-100" src="https://source.unsplash.com/gJZQcirK8aw" alt="Preview" />
                    <p className="title">Lovely fashion dress</p>
                    <p className="price">$200</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="similar-product">
                    <img className="w-100" src="https://source.unsplash.com/qbB_Z2pXLEU" alt="Preview" />
                    <p className="title">Lovely red dress</p>
                    <p className="price">$120</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))
      }
    </div>
  );
}

export default Product;
