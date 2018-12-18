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
    // this.localStep = this.props.timerInterval;
    // if (localStorage.getItem("interval")) {
    //   this.localStep = parseInt(localStorage.getItem("interval"));
    //   this.props.setTimerStep({ timerStep: this.localStep });
    // }

    // this.state = { counter: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.timerStart = this.timerStart.bind(this);
  }

  componentDidMount() {
    this.props.action({
      interval: this.props.timerParams.interval,
      counter: this.props.timerParams.counter
    });
  }

  timerStart(interval) {
    clearInterval(this.timer);
    this.timer = setTimeout(
      () =>
        this.props.action({
          interval,
          counter: this.props.timerParams.counter + interval
        }),
      interval
    );
  }

  handleChange(interval) {
    this.props.setTimerStep({
      timerStep: { interval, counter: this.props.timerParams.counter }
    });
    localStorage.setItem("interval", interval);
  }

  render() {
    const defaultStepValue = this.props.timerInterval;
    this.timerStart(defaultStepValue);

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
                defaultValue={this.localStep}
                marks={{ 0: 0, 5000: 5000 }}
                step={100}
                handle={handle}
                onChange={this.handleChange}
              />
            </div>
          </Col>
          <Col>
            <h4>Counter:</h4>
            <p>{this.state.counter}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return {
    timerParams: store.timer.timerStep
  };
};

const mapDispatchToProps = dispatch => ({
  setTimerStep: step => dispatch(setTimerStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskTwo);
