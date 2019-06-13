import React, { Component } from "react";
import { Slide, Title, Text } from '@sambego/diorama';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.authenticate = this.authenticate.bind(this);
  }

  authenticate() {
    let path = window.location.href.split("/");
    let slideNumber = path[path.length-1];
    let nextSlide = parseInt(slideNumber) + 1;
    path[path.length-1] = nextSlide;
    let callbackUrl = path.join("/");

    window.location.href = `${this.props.authServer}/login?callback=${callbackUrl}`;
  }

  render() {
    return (
      <Slide>
        <Title>{this.props.title}</Title>
        <Text>
          <button type="button" onClick={this.authenticate}>Login</button>
        </Text>
      </Slide>
    )
  }
}