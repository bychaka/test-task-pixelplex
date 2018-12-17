import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import { connect } from "react-redux";
import { setTimerStep } from "../actions/tasksActions";
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
  constructor(props) {
    super(props);
    // this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.props.setTimerStep({ timerStep: event });
    // console.log(this.props, event);
  }

  componentDidMount() {
    // this.props.set = 3000;
    // this.props.setTimerStep({ timerStep: 3000 });
  }

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
                defaultValue={this.props.step}
                marks={{ 0: 0, 5000: 5000 }}
                step={100}
                handle={handle}
                onChange={this.handleChange}
              />
            </div>
          </Col>
          <Col>
            <h4>Counter:</h4>
            <p>0000000{this.props.step}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return {
    step: store.timer.timerStep
  };
};

const mapDispatchToProps = dispatch => ({
  setTimerStep: step => dispatch(setTimerStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskTwo);
