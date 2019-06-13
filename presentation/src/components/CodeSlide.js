import React, { Component } from "react";
import { Slide, Title, Code } from "@sambego/diorama";

export default class CodeSlide extends Component {
  render() {
    const code = this.props.children;
    const lang = this.props.lang || "javascript";

    return (
      <Slide>
        {this.props.title &&
          <Title>{this.props.title}</Title>
        }
        <Code code={code} lang={lang} />
      </Slide>
    )
  }
}