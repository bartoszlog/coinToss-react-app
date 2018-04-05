import React, {Component} from 'react';
import CoinToss from './CoinToss.js';

class Coin extends Component {
  state = {
    sideOfCoin: ''
  }

  render () {
    return (
      <div>
        <CoinToss />
      </div>
    );
  }
}

export default Coin;
