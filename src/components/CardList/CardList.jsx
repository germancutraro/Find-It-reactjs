import React, { Component } from 'react';
import Card from '../Card/Card';

class CardList extends Component {
  render() {
    const artists = this.props.data.map( ({name, image, url}, i) => <Card name={name} image={image} url={url} key={i} />);
    return(
      <div>
        {artists}
      </div>
    );
  }
}

export default CardList;