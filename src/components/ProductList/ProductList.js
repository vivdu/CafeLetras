import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div className="shop-list">
            <h2>Libros disponibles para entrega</h2>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
