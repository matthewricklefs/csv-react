import React from "react";

export default class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      value: props.value,
    };
    this.display = this.determineDisplay(
      { x: props.x, y: props.y },
      props.value
    );
    this.timer = 0;
    this.delay = 200;
    this.prevent = false;
  }

  componentDidMount() {
    window.document.addEventListener("unselectAll", this.handleUnselectAll);
  }

  componentWillUpdate() {
    this.display = this.determineDisplay(
      { x: this.props.x, y: this.props.y },
      this.state.value
    );
  }

  componentWillUnmount() {
    window.document.removeEventListener("unselectAll", this.handleUnselectAll);
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
    this.display = this.determineDisplay(
      { x: this.props.x, y: this.props.y },
      e.target.value
    );
  };

  onKeyPressOnSpan = () => {
    if (!this.state.editing) {
      this.setState({ editing: true });
    }
  };

  handleUnselectAll = () => {
    if (this.state.selected || this.state.editing) {
      this.setState({ selected: false, editing: false });
    }
  };

  hasNewValue = (value) => {
    this.props.onChangedValue(
      {
        x: this.props.x,
        y: this.props.y,
      },
      value
    );
    this.setState({ editing: false });
  };

  emitUnselectAllEvent = () => {
    const unselectAllEvent = new Event("unselectAll");
    window.document.dispatchEvent(unselectAllEvent);
  };

  clicked = () => {
    // Prevent click and double click to conflict
    this.timer = setTimeout(() => {
      if (!this.prevent) {
        // Unselect all the other cells and set the current
        // Cell state to `selected`
        this.emitUnselectAllEvent();
        this.setState({ selected: true });
      }
      this.prevent = false;
    }, this.delay);
  };

  doubleClicked = () => {
    clearTimeout(this.timer);
    this.prevent = true;

    this.emitUnselectAllEvent();
    this.setState({ editing: true, selected: true });
  };

  determineDisplay = ({ x, y }, value) => {
    return value;
  };

  calculateCss = () => {
    const css = {
      width: "80px",
      padding: "4px",
      margin: "0",
      height: "25px",
      boxSizing: "border-box",
      position: "relative",
      display: "inline-block",
      color: "black",
      border: "1px solid #cacaca",
      textAlign: "left",
      verticalAlign: "top",
      fontSize: "14px",
      lineHeight: "15px",
      overflow: "hidden",
      fontFamily:
        "Calibri, 'Segoe UI', ' Thonburi, ' Arial', Verdana, sans-serif'",
    };

    if (this.props.x === 0 || this.props.y === 0) {
      css.textAlign = "center";
      css.backgroundColor = "#f0f0f0";
      css.fontWeight = "bold";
    }

    return css;
  };

  render() {
    const css = this.calculateCss();

    // column 0
    if (this.props.x === 0) {
      return <span style={css}>{this.props.y}</span>;
    }

    // row 0
    if (this.props.y === 0) {
      const alpha = " abcdefghijklmnopqrstuvwxyz".split("");
      return (
        <span
          onKeyPress={this.onKeyPressOnSpan}
          style={css}
          role="presentation"
        >
          {alpha[this.props.x]}
        </span>
      );
    }

    if (this.state.editing) {
      return (
        <input
          style={css}
          type="text"
          onBlur={this.onBlur}
          onKeyPress={this.onKeyPressInput}
          value={this.state.value}
          onChange={this.onChange}
          autoFocus
        />
      );
    }

    return (
      <span
        onClick={(e) => this.clicked(e)}
        onDoubleClick={(e) => this.doubleClicked(e)}
        style={css}
        role="presentation"
      >
        {this.display}
      </span>
    );
  }
}
