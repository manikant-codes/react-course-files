import { Component } from "react";
import SecondClassComponent from "./SecondClassComponent";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anonymous",
      course: "JavaScript",
      duration: "3 Months",
      prevState: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { name: props.name };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ course: "Node", duration: "3 Months" });
    }, 2000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    document.getElementById("before").innerHTML = "Before " + prevState.course;
  }

  componentDidUpdate() {
    document.getElementById("after").innerHTML = "After " + this.state.course;
  }

  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return (
      <div className="demoContainer">
        <div className="demoWrapper" style={{ flexDirection: "column" }}>
          <div style={{ textAlign: "center" }}>
            <SecondClassComponent text={"Hello!"} />
            <h2>
              Hi, {this.state.name}! Welcome to {this.state.course}!
            </h2>
            <p>{this.state.duration}</p>
            <p id="before"></p>
            <p id="after"></p>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <button
              onClick={() =>
                this.setState({ course: "React", duration: "2 Months" })
              }
            >
              React
            </button>
            <button
              onClick={() =>
                this.setState({ course: "JavaScript", duration: "3 Months" })
              }
            >
              JavaScript
            </button>
            <button
              onClick={() =>
                this.setState({ course: "Node", duration: "3 Months" })
              }
            >
              Node
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
