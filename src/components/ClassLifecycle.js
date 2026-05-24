

class Child2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child2 constructor"); // Called Third
  }

  componentDidMount() {
    console.log("Child2 mounted"); // Called Fifth
  }

  render() {
    return <div>Child2</div>;
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor"); // Called Third
  }

  componentDidMount() {
    console.log("Child mounted"); // Called Fifth
  }
  // Called Fourth, after the child component is rendered and mounted, the parent component's componentDidMount method will be called.
  render() {
    return <div><Child2 /></div>;
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor"); // Called first
  }

  componentDidMount() {
    console.log("Parent mounted"); // Called Sixth
  }
  //Called second
  render() {
    return <Child />; // The child component is rendered inside the parent component, so the child's lifecycle methods will be called before the parent's lifecycle methods.
  }
}

// Console Output:
// Parent constructor
// Parent render
// Child constructor
// Child render
// Child mounted
// Parent mounted

export default Parent
