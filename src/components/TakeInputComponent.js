import React from "react";
import moment from "moment";

class InputComponent extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
  }

  createTable = () => {
    let table = [];

    for (let i = 1; i <= this.state.value; i++) {
      table.push(<tr>{i}</tr>);
    }
    return table;
  };

  checkNumber = () => {
    var message;

    if (this.state.value % 5 === 0 && this.state.value % 3 === 0) {
      message = "fizz buzz";
      return <h1>{message}</h1>;
    }

    if (this.state.value % 3 === 0) {
      message = "fizz";
      const day = moment().isoWeekday();
      if (day === 5) {
        message = "wizz";
      }
      return <h1 style={{ color: "blue" }}>{message}</h1>;
    }

    if (this.state.value % 5 === 0) {
      message = "buzz";
      const day = moment().isoWeekday();
      if (day === 5) {
        message = "wuzz";
      }
      return <h1 style={{ color: "green" }}>{message}</h1>;
    }
  };

  checkNumberLimit = () => {
    if (this.state.value > 1000) {
      return <h1>Number should be less than 1000</h1>;
    }
  };

  render() {
    return (
      <div>
        <h2>Enter a number</h2>
        <input value={this.state.value} onChange={this.onChange} />
        {this.checkNumberLimit()}
        <table>{this.createTable()}</table>
        {this.checkNumber()}
      </div>
    );
  }
}

export default InputComponent;
