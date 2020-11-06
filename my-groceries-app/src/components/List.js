import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const itemsArray = props.items.map(item => (
    <div className="container" key={item.id + 1}>
      <section key={item.id + 2} className="count">
        {item.count}x
      </section>
      <ListItem key={item.id} item={item} handleClick={props.handleClick} />
    </div>
  ));
  return <div className="list">{itemsArray}</div>;
}

export default List;
