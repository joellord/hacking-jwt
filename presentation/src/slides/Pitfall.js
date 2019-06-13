import React, { Component } from "react";

import { Title, Subtitle, Image } from "@sambego/diorama";
import HackedSlide from "../components/HackedSlide";

export default class Pitfall extends Component {
  render() {
    const titleStyle = {
      position: "absolute",
      left: "50%",
      top: "35%",
      transform: "translate3d(-50%, -50%, 0)",
      color: "#fff",
      margin: 0
    };
    const subtitleStyle = {
      position: "absolute",
      left: "50%",
      top: "55%",
      transform: "translate3d(-50%, -50%, 0)",
      color: "#ccc",
      margin: 0
    };
    return (
      <HackedSlide>
        <Image src={this.props.img} full color="darkgrey" />
        <Title style={titleStyle}>Pitfall #{this.props.number}</Title>
        <Subtitle style={subtitleStyle}>{this.props.title}</Subtitle>
      </HackedSlide>
    )
  }
}