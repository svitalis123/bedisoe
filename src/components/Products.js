import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import data from './content';
import '../css/Products.css';

function Products() {
  return (
    <div className="product_container">
      <figure className="product_container_figure1">
        <img src="/images/image/e8banner.png" alt="adverticement banner" />
      </figure>
      <div className="product_container_row1">
        {
          data.slice(0, 3).map((item) => (
            <div key={item.id} className="product_container_row1_divs">
              <article>
                <img src={`${item.image}`} alt={`${item.title}`} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: '#111' }}><Button variant="contained" color="secondary">Learn More</Button></Link>

              </article>
            </div>
          ))
        }
      </div>
      <figure className="product_container_figure2">
        <img src="/images/image/e8banner.png" alt="adverticement banner" />
      </figure>
      <div className="product_container_row2">
        {
          data.slice(3, 6).map((item) => (
            <div key={item.id} className="product_container_row1_divs">
              <article>
                <img src={`${item.image}`} alt={`${item.title}`} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: '#111' }}><Button variant="contained" color="secondary">Learn More</Button></Link>
              </article>
            </div>
          ))
        }
      </div>
      <figure className="product_container_figure3">
        <img src="/images/image/e8banner.png" alt="adverticement banner" />
      </figure>
      <div>
        {
          data.slice(6, 9).map((item) => (
            <div key={item.id} className="product_container_row1_divs">
              <article>
                <img src={`${item.image}`} alt={`${item.title}`} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: '#111' }}><Button variant="contained" color="secondary">Learn More</Button></Link>
              </article>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Products;
