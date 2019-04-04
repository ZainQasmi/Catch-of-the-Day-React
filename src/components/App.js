import React, { Component } from "react";
import Header from "../components/Header";
import Order from "../components/Order";
import Inventory from "../components/Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "../components/Fish";

class App extends Component {
  // Method that updates state and the state should live in the same Component
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. Take a copy of the existing state. AVOID MUTATION
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes: fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = fishID => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update number in our order
    order[fishID] = order[fishID] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(fishID => {
              return (
                <Fish
                  key={fishID}
                  index={fishID}
                  details={this.state.fishes[fishID]}
                  onFishAddToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          onInventorySubmit={this.addFish}
          onInventoryLoadFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
