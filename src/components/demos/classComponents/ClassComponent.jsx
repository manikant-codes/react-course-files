import { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { course: "React", duration: "1 Month", name: "Anonymous" };
  }

  static getDerivedStateFromProps(props, state) {
    return { name: props.name };
  }

  changeCourse(course, duration = "1 Month") {
    this.setState({ course, duration });
  }

  render() {
    return (
      <div className="demoContainer">
        <div className="demoWrapper" style={{ flexDirection: "column" }}>
          <h1>
            Welcome to {this.state.course} {this.state.name}
          </h1>
          <p>Duration: {this.state.duration}</p>
          <div style={{ display: "flex", gap: "16px" }}>
            <button onClick={() => this.changeCourse("JavaScript", "3 Months")}>
              JavaScript
            </button>
            <button onClick={() => this.changeCourse("React", "1 Month")}>
              React
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
