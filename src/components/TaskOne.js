import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";
import ListGroup from "react-bootstrap/lib/ListGroup";
import "./taskOne.css";

class TaskOne extends Component {
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
                <Form.Control className="form-input" placeholder="Enter text" />
                <Button className="form-button" variant="outline-secondary">
                  Add text
                </Button>
              </Form>
            </div>
          </Col>
          <Col>
            <h4>List:</h4>
            <ListGroup>
              <ListGroup.Item className="list-item">
                <p className="list-item-text">Cras justo odio</p>
                <Button variant="outline-secondary">delete text</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TaskOne;
