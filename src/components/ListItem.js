import React, { Component } from "react";
// import { connect } from "react-redux";
// import { deleteListItem } from "../actions/tasksActions";

import Button from "react-bootstrap/lib/Button";
import ListGroup from "react-bootstrap/lib/ListGroup";
import "./taskOne.css";

class ListItem extends Component {
  constructor(...args) {
    super(...args);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    console.log(this.props.data.id);
    console.log(this.props);
    // this.props.deleteTextClickHandler(id);
  }

  render() {
    return (
      <ListGroup.Item className="list-item">
        <p className="list-item-text">{this.props.data.value}</p>
        <Button
          variant="outline-secondary"
          onClick={this.deleteItem(this.props.data.id)}
        >
          delete text
        </Button>
      </ListGroup.Item>
    );
  }
}

export default ListItem;

// const mapStateToProps = store => {
//   return {
//     list: store.list.listItems
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   deleteListItem: item => dispatch(deleteListItem(item))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ListItem);
