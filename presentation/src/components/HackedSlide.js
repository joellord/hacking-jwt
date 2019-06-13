import React, { Component } from "react";
import { Slide } from "@sambego/diorama";

import { logger } from "../helpers/logger";

export default class HackedSlide extends Component {
  render() {
    logger("Rendering page");
    return (
      <Slide>
        {this.props.children}
      </Slide>
    )
  }
}