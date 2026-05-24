import React, { Component } from "react";

class ClassComponent extends Component {

  constructor(props) {
    super(props);
    console.log("Constructor called", props);

    this.state = {
        count: 0
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }


  render() {
    console.log("Render", this);
    const { name, age, occupation } = this.props.user;
    let { count } = this.state;


    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment Count</button>
        <h2>Name: {name} Class</h2>
        <h3>Age: {age}</h3>
        <p>Occupation: {occupation}</p>
      </div>
    );
  }
}

export default ClassComponent;
