import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import { connect } from "react-redux";
import { onAddItem, onDeleteItem } from "../../actions/tasksActions";
import List from "./List";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";

import "./taskOne.css";

class TaskOne extends Component {
  constructor(props) {
    super(props);
    this.addTextHandler = this.addTextHandler.bind(this);
    this.deleteTextHandler = this.deleteTextHandler.bind(this);
  }

  addTextHandler() {
    if (this.refs.textInput.value) {
      this.props.onAddItem({
        id: +new Date(),
        value: this.refs.textInput.value
      });
      this.refs.textInput.value = "";
    }
  }

  deleteTextHandler(id) {
    this.props.onDeleteItem({ id });
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
                  onClick={this.addTextHandler}
                >
                  Add text
                </Button>
              </Form>
            </div>
          </Col>
          <Col>
            <h4>List:</h4>
            <List
              data={this.props.list}
              onDeleteHandler={this.deleteTextHandler}
            />
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
  onAddItem: item => dispatch(onAddItem(item)),
  onDeleteItem: item => dispatch(onDeleteItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskOne);
