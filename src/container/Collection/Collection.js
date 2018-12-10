import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary'
import Products from '../../component/Products/Products';

class Collection extends Component {
  state = {
    products: [
      {
        name: 'How To Win Friends And Influence People',
        author: 'Dale Carnegie',
        price: 199
      }, {
        name: 'Time Management',
        author: 'Brian Tracy',
        price: 99
      }, {
        name: 'The Power Of Habits',
        author: 'Charles Duhigg',
        price: 232
      }, {
        name: 'Managing Oneself',
        author: 'Peter F Drucker',
        price: 167
      }, {
        name: 'Rich Dad Poor Dad',
        author: 'Robert T Kiyosaki',
        price: 319
      }, {
        name: 'The Power Of Your Subconscious Mind',
        author: 'Joseph Murphy',
        price: 75
      }, {
        name: 'Discipline Equals Freedom: Field Manual',
        author: 'Jocko Willink',
        price: 459
      }
    ]
  }
  render() {
    return (
      <Aux>
        <Products details={this.state.products} />
      </Aux>
    );
  }
}

export default Collection;
