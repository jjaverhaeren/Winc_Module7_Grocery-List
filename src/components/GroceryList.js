import React from "react";
import List from "./List";
import InputField from "./InputField";

function GroceryList(props) {
  return (
    <div className="groceryList">
      <h3>Grocery List</h3>
      <InputField handleSubmit={props.handleSubmit} />
      <List items={props.items} handleClick={props.handleClick} handleBin={props.handleBin}/>
    </div>
  );
}

export default GroceryList;
