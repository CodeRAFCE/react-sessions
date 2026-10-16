import React from "react";

class GrandChild extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }

  componentDidUpdate() {
    console.log(this.props.name + " componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + " componentWillUnmount");
  }

  render() {
    console.log(this.props.name + " render");
    return <span>{this.props.count}</span>;
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }

  componentDidUpdate() {
    console.log(this.props.name + " componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + " componentWillUnmount");
  }

  render() {
    console.log(this.props.name + " render");
    return (
      <GrandChild
        name={this.props.name + " -> GrandChild"}
        count={this.props.count}
      />
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSecondChild: true, count: 0 };
    console.log("App constructor");
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }

  handleUpdate = () => {
    this.setState({ showSecondChild: false, count: 1 });
  };

  render() {
    console.log("App render");
    return (
      <div>
        <Child name="Child A" count={this.state.count} />
        {this.state.showSecondChild && (
          <Child name="Child B" count={this.state.count} />
        )}
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

export default App;

/**
 * * CONSOLE OUTPUT FOR MOUNT
 * App constructor
 * App render
 * Child A constructor
 * Child A render
 * Child A -> GrandChild constructor
 * Child A -> GrandChild render
 * Child B constructor
 * Child B render
 * Child B -> GrandChild constructor
 * Child B -> GrandChild render
 *
 * Child A -> GrandChild componentDidMount
 * Child A componentDidMount
 * Child B -> GrandChild componentDidMount
 * Child B componentDidMount
 * App componentDidMount
 */

/**
 * * CONSOLE OUTPUT FOR UPDATE
 * App render
 * Child A render
 * Child A -> GrandChild render {count: 1}
 * 
 * * COMMIT PHASE
 * Child B -> GrandChild componentWillUnmount
 * Child B componentWillUnmount
 * 
 * Child A -> GrandChild componentDidUpdate {count: 1}
 * Child A componentDidUpdate {count: 1}
 * App componentDidUpdate
 */
