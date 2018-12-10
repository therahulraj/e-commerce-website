import React from 'react';

import classes from './Product.css';

import Aux from '../../hoc/Auxilliary'

const product = ( props ) => {
  return (
    <Aux className={classes.Product}>
      <h1>{props.name}</h1>
      <p>{props.author}</p>
      <p>{props.price}</p>
    </Aux>
  )
}

export default product;
