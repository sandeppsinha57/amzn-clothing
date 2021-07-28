import React from "react";

import "./shop.style.scss";

import SHOP_DATA from "./shop.data";

import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop-collection">
        {this.state.collections.map(({ id, ...otherCollection }) => (
          <PreviewCollection key={id} {...otherCollection}></PreviewCollection>
        ))}
      </div>
    );
  }
}

export default ShopPage;
