import React, { Component } from "react";
import Body from "./Body";

class BodyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: []
    };
  }

  UNSAFE_componentWillMount() {
    var screen = [];
    screen.push(<Body appContext={this} key={"Home-screen"} />);
    this.setState({
      screen: screen
    });
  }
  render() {
    return this.state.screen;
  }
}
export default BodyContainer;
