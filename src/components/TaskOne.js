import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import { connect } from "react-redux";
import { addListItem } from "../actions/tasksActions";
import List from "./List";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";

import "./taskOne.css";

class TaskOne extends Component {
  constructor(props) {
    super(props);
    this.addTextClickHandler = this.addTextClickHandler.bind(this);
  }

  addTextClickHandler() {
    if (this.refs.textInput.value) {
      this.props.addListItem({
        id: +new Date(),
        value: this.refs.textInput.value
      });
      this.refs.textInput.value = "";
    }
  }

  render() {
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
            <List data={this.props.list} />
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
  addListItem: item => dispatch(addListItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskOne);
