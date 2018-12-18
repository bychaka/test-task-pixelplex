import React, { Component } from "react";
import Button from "react-bootstrap/lib/Button";
import ListGroup from "react-bootstrap/lib/ListGroup";

import "./taskOne.css";

class ListItem extends Component {
  render() {
    return (
      <ListGroup.Item className="list-item">
        <p className="list-item-text">{this.props.data.value}</p>
        <Button
          variant="outline-secondary"
          onClick={() => {
            this.props.onDeleteHandler(this.props.data.id);
          }}
        >
          Delete
        </Button>
      </ListGroup.Item>
    );
  }
}

export default ListItem;
