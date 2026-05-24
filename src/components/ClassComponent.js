import React, { Component } from "react";
import {getUser} from "../services/users.services"


class ClassComponent extends Component {

  constructor(props) {
    super(props);
    console.log("Constructor called", props);

    this.state = {
        userInfo: null,
    };
  }

  async componentDidMount() {
    console.log("Component did mount");
    const user = await getUser()
    this.setState({userInfo: user})
    console.log(user)

    // this.timer = setInterval(() => {
    //     console.log("Interval called")
    // }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    // clearInterval(this.timer);
  }


  render() {
    console.log("Render", this);
    const { name, age, occupation } = this.props.user;
    let { userInfo } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {userInfo?.name} Class</h2>
        <h3>Company: {userInfo?.company}</h3>
        <p>Location: {userInfo?.location}</p>
      </div>
    );
  }
}

export default ClassComponent;
