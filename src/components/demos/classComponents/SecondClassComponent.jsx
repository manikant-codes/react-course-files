import { Component } from "react";

class SecondClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default SecondClassComponent;
