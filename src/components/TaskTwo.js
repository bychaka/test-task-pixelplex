import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";

import "./taskTwo.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

const Handle = Slider.Handle;
const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class TaskTwo extends Component {
  render() {
    return (
      <Container className="task">
        <Row>
          <Col>
            <h3>Task #2</h3>
          </Col>
        </Row>
        <Row className="task-2-wrappper">
          <Col>
            <div className="slider">
              <Slider
                min={0}
                max={5000}
                defaultValue={1000}
                marks={{ 0: 0, 5000: 5000 }}
                step={100}
                handle={handle}
              />
            </div>
          </Col>
          <Col>
            <h4>Counter:</h4>
            <p>0000000</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TaskTwo;
