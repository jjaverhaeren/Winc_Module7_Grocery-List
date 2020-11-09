import React from "react";
import List from "./List";

function ShoppingCart(props) {
  return (
    <div className="shoppingCart">
      <h3>Shopping Cart</h3>
      <List items={props.items2} 
      handleClickMinus={props.handleClickMinus}
      handleClickPlus={props.handleClickPlus}/>
      <button onClick={props.emptyCart} className="empty">
        Empty Cart
      </button>
    </div>
  );
}

export default ShoppingCart;
