import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addListItem } from "../actions/tasksActions";
// import { deleteListItem } from "../actions/tasksActions";

import Button from "react-bootstrap/lib/Button";
import ListGroup from "react-bootstrap/lib/ListGroup";
import "./taskOne.css";

class ListItem extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { items: "" };
  //     this.addTextClickHandler = this.addTextClickHandler.bind(this);
  //     this.deleteTextClickHandler = this.deleteTextClickHandler.bind(this);
  //     this.newList = this.newList.bind(this);
  //   }

  render() {
    return (
      <ListGroup.Item className="list-item">
        <p className="list-item-text">1</p>
        <Button
          variant="outline-secondary"
          //   onClick={this.deleteTextClickHandler}
        >
          delete text
        </Button>
      </ListGroup.Item>
    );
  }
}

export default ListItem;
