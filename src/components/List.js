import React, { Component } from "react";
import ListGroup from "react-bootstrap/lib/ListGroup";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    const deleteHandler = this.props.onDeleteHendler;
    console.log(this.props);
    return (
      <ListGroup>
        {this.props.data.map(listItem => {
          console.log(deleteHandler);
          return (
            <ListItem
              data={listItem}
              key={listItem.id}
              deleteItem={this.props.onDeleteHendler}
            />
          );
        })}
      </ListGroup>
    );
  }
}

export default List;
