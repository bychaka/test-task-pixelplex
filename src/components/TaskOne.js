import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import { connect } from "react-redux";
import { addListItem } from "../actions/tasksActions";
import { deleteListItem } from "../actions/tasksActions";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";
import ListGroup from "react-bootstrap/lib/ListGroup";
import "./taskOne.css";

class TaskOne extends Component {
  constructor(props) {
    super(props);
    this.state = { items: "" };
    this.addTextClickHandler = this.addTextClickHandler.bind(this);
    this.deleteTextClickHandler = this.deleteTextClickHandler.bind(this);
    this.newList = this.newList.bind(this);
  }

  newList() {
    let y = this.props.list.map((value, key) => (
      <ListGroup.Item className="list-item" key={key}>
        <p className="list-item-text">{value}</p>
        <Button
          variant="outline-secondary"
          onClick={this.deleteTextClickHandler}
        >
          delete text
        </Button>
      </ListGroup.Item>
    ));

    console.log(y);
    return y;
  }

  deleteTextClickHandler() {
    console.log("delete text", this.refs.paragraf);
    this.props.list.map((value, key) => console.log(value.id, key));
  }

  addTextClickHandler() {
    if (this.refs.textInput.value) {
      console.log("olala", this.refs.textInput.value);
      this.props.addListItem({
        id: +new Date(),
        value: this.refs.textInput.value
      });
    }
    this.newList();
  }

  render() {
    // const newList = this.newList();
    const arrayList = this.props.list;
    var List = arrayList.map(function(el, index) {
      return (
        <ListGroup.Item className="list-item" key={index}>
          <p className="list-item-text">{el}</p>
          <Button
            variant="outline-secondary"
            onClick={this.deleteTextClickHandler}
          >
            delete text
          </Button>
        </ListGroup.Item>
      );
    });
    return (
      <Container className="task">
        <Row>
          <Col>
            <h3>Task #1</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="form-wrapper">
              <Form className="form">
                <Form.Control
                  className="form-input"
                  placeholder="Enter text"
                  ref="textInput"
                />
                <Button
                  className="form-button"
                  variant="outline-secondary"
                  onClick={this.addTextClickHandler}
                >
                  Add text
                </Button>
              </Form>
            </div>
          </Col>
          <Col>
            <h4>List:</h4>
            <ListGroup>
              {console.log(List)}
              {/* {this.state.items} */}
              {/* {newList} */}
              {/* {this.props.list.map((value, id) => console.log(value.id, id))} */}
              {/* <ListGroup.Item className="list-item">
                <p className="list-item-text" ref="paragraf">
                  Cras justo odio
                </p>
                <Button
                  variant="outline-secondary"
                  onClick={this.deleteTextClickHandler}
                >
                  delete text
                </Button>
              </ListGroup.Item> */}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return {
    list: store.list.listItems
  };
};

const mapDispatchToProps = dispatch => ({
  addListItem: item => dispatch(addListItem(item)),
  deleteListItem: item => dispatch(deleteListItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskOne);
