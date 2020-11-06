import React, { Component } from "react";
import ShoppingCart from "./components/ShoppingCart";
import GroceryList from "./components/GroceryList";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [],
      shoppingListItems: [],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickGroceryItem(propsItem) {
    this.state.groceryItems.forEach(item => {
      if (item.id === propsItem.id) {
        if (this.state.shoppingListItems.includes(item)) {
          item.count = item.count + 1;
        } else {
          item.count = 1;
          this.state.shoppingListItems.push(item);
        }
      }
    });
    this.setState({ shoppingListItems: this.state.shoppingListItems });
  }

  emptyCart() {
    this.setState({ shoppingListItems: [] });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newId = this.state.groceryItems.length + 1;
    let newTitle = event.target.firstChild.value;
    let newItem = { id: newId, title: newTitle };
    this.state.groceryItems.push(newItem);
    this.setState({ groceryItems: this.state.groceryItems });
    event.target.firstChild.value = "";
  }

  render() {
    return (
      <div className="app_container">
        <GroceryList
          items={this.state.groceryItems}
          handleClick={this.handleClickGroceryItem}
          handleSubmit={this.handleSubmit}
          inputvalue={this.state.inputvalue}
        />
        <ShoppingCart
          items2={this.state.shoppingListItems}
          emptyCart={this.emptyCart}
        />
      </div>
    );
  }
}

export default Container;
