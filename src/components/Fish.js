import React, { Component } from "react";
import { formatPrice } from "../helpers";

class Fish extends Component {
  render() {
    const props = this.props.details;
    const isAvailable = props.status === "available";
    return (
      <li className="menu-fish">
        <img src={props.image} alt={props.name} />
        <h3 className="fish-name">
          {props.name}
          <span className="price">{formatPrice(props.price)}</span>
        </h3>
        <p>{props.desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => {
            this.props.onFishAddToOrder(this.props.index);
          }}
        >
          {isAvailable ? "Add To Order" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;
