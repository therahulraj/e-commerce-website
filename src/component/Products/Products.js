import React from 'react';

import Product from '../Product/Product';

const products = (props) => {
  return props.details.map((product, index) => < Product
      name={product.name}
      author={product.author}
      price={product.price}
      key={index}
       />
  )
}

export default products;
