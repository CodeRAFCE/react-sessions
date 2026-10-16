import React from "react";

class Child2 extends React.Component {
  // constructor is called 5th
  constructor(props) {
    super(props);
    console.log("Child2 constructor");
  }

  // Child2 componentDidMount is called 7th
  componentDidMount() {
    console.log("Child2 mounted");
  }

  // render is called 6th and since there is no further components now
  // Child2 componentDidMount is executed
  render() {
    console.log("Child2 render");
    return <div>Child2</div>;
  }
}

class Child extends React.Component {
  // constructor is called thrid
  constructor(props) {
    super(props);
    console.log("Child constructor");
  }

  // Child componentDidMount is called 8th
  componentDidMount() {
    console.log("Child mounted");
  }

  // render is called forth
  render() {
    console.log("Child render");
    return (
      <div>
        {/* Since our Child component has another child the component is instatiated again */}
        <Child2 />
      </div>
    );
  }
}

class Parent extends React.Component {
  // contructor() is executed first
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent mounted");
  }

  // render() is executed second
  render() {
    console.log("Parent render");
    return (
      <>
        {/* The parent has a Child class component and instatiate the Child */}
        <Child />{" "}
        {/* With the Child component mounted it moves on to next Child component below */}
        <Child />
        {/* The above Child component will repeat the process again like the order mentioned in the Child components */}
        {/* The child component is rendered inside the parent
        component, so the child's lifecycle methods will be called before the
        parent's lifecycle methods. */}
      </>
    );
  }
}

/**
 * * CONSOLE OUTPUT:
 * Parent constructor
 * Parent render
 * Child constructor
 * Child render
 * Child2 constructor
 * Child2 render
 * Parent same Child component again and repeats the process
 * Child constructor
 * Child render
 * Child2 constructor
 * Child2 render
 * Child2 mounted
 * Child mounted
 * Child2 mounted
 * Child mounted
 * Parent mounted
 */
export default Parent;
