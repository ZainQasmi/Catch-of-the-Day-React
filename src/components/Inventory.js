import React, { Component } from "react";
import AddFishForm from "../components/AddFishForm";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm onAddFishSubmit={this.props.onInventorySubmit} />
        <button onClick={this.props.onInventoryLoadFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
