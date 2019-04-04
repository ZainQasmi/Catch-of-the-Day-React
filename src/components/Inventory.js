import React, { Component } from "react";
import AddFishForm from "../components/AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            updatedFish={this.props.onInventoryUpdatedFish}
            fish={this.props.fishes[key]}
          />
        ))}
        <AddFishForm onAddFishSubmit={this.props.onInventorySubmit} />
        <button onClick={this.props.onInventoryLoadFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
