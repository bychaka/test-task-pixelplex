import React, { Component } from "react";
import ListGroup from "react-bootstrap/lib/ListGroup";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.data.map(listItem => {
          return (
            <ListItem
              data={listItem}
              key={listItem.id}
              onDeleteHandler={this.props.onDeleteHandler}
            />
          );
        })}
      </ListGroup>
    );
  }
}

export default List;
