import React, { Component } from "react";
import ShoppingCart from "./components/ShoppingCart";
import GroceryList from "./components/GroceryList";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        // { id: 1, title: "paprika", count: 1 },
        // { id: 2, title: "fruit", count: 1 },
        // { id: 3, title: "water", count: 1 },
      ],
      shoppingListItems: [
        // { id: 1, title: "paprika", count: 1 },
        // { id: 2, title: "fruit", count: 1 },
        // { id: 3, title: "water", count: 1 },
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
    this.handleBin = this.handleBin.bind(this);
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

  handleClickPlus(event) {
    event.preventDefault();
    const title = event.target.parentElement.childNodes[1].innerHTML;
    this.state.shoppingListItems.forEach(item => {
      if (item.title === title) {
        item.count = item.count + 1;
      }
      this.setState({ shoppingListItems: this.state.shoppingListItems });
    });
  }

  handleClickMinus(event) {
    event.preventDefault();
    const title = event.target.parentElement.childNodes[1].innerHTML;
    this.state.shoppingListItems.forEach(item => {
      if (item.title === title && item.count > 1) {
        item.count = item.count - 1;
        this.setState({ shoppingListItems: this.state.shoppingListItems });
      } else if (item.title === title && item.count === 1) {
        let index = this.state.shoppingListItems.indexOf(item);
        this.state.shoppingListItems.splice(index, 1);
        this.setState({ shoppingListItems: this.state.shoppingListItems });
      }
    });
  }

  handleBin(event) {
    event.preventDefault();
    // console.log(event.target.parentElement.childNodes[1].innerHTML);
    const title = event.target.parentElement.childNodes[1].innerHTML;
    this.state.groceryItems.forEach(item => {
      if (item.title === title ) {
        let index = this.state.groceryItems.indexOf(item);
        this.state.groceryItems.splice(index, 1);
        this.setState({ groceryItems: this.state.groceryItems });
      }
    });
  }

  render() {
    return (
      <div className="app_container">
        <GroceryList
          items={this.state.groceryItems}
          handleClick={this.handleClickGroceryItem}
          handleSubmit={this.handleSubmit}
          handleBin={this.handleBin}
          inputvalue={this.state.inputvalue}
        />
        <ShoppingCart
          items2={this.state.shoppingListItems}
          emptyCart={this.emptyCart}
          handleClickPlus={this.handleClickPlus}
          handleClickMinus={this.handleClickMinus}
        />
      </div>
    );
  }
}

export default Container;
