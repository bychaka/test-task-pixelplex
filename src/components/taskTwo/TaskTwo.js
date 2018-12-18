import React, { Component } from "react";
import Container from "react-bootstrap/lib/Container";
import { connect } from "react-redux";
import { setTimerStep } from "../../actions/tasksActions";
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
    this.handleChange = this.handleChange.bind(this);
    this.timerStart = this.timerStart.bind(this);
  }

  timerStart(interval) {
    clearInterval(this.timer);
    this.timer = setTimeout(
      () =>
        this.props.setTimerStep({
          interval,
          counter: this.props.timerParams.counter + interval
        }),
      interval
    );
  }

  handleChange(interval) {
    localStorage.setItem("interval", interval);
    this.props.setTimerStep({
      interval,
      counter: this.props.timerParams.counter
    });
  }

  render() {
    this.timerStart(this.props.timerParams.interval);

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
                defaultValue={this.props.timerParams.interval}
                marks={{ 0: 0, 5000: 5000 }}
                step={100}
                handle={handle}
                onChange={this.handleChange}
              />
            </div>
          </Col>
          <Col>
            <h4>Counter:</h4>
            <p>{this.props.timerParams.counter}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return {
    timerParams: store.timer
  };
};

const mapDispatchToProps = dispatch => ({
  setTimerStep: step => dispatch(setTimerStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskTwo);
