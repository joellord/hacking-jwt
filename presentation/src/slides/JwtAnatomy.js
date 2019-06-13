import React, { Component } from "react";
import { Slide, Columns, Subtitle, Text } from "@sambego/diorama";

export default class JwtAnatomy extends Component {
  render() {
    const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    const jwtParts = jwt.split(".");
    const colors = {header: "inherit", payload: "inherit", signature: "inherit"};

    if (this.props.highlight === "header" || this.props.highlight === "all") colors.header = "orange";
    if (this.props.highlight === "payload" || this.props.highlight === "all") colors.payload = "darkblue";
    if (this.props.highlight === "signature" || this.props.highlight === "all") colors.signature = "lightgreen";

    let content;

    if(!this.props.code) {
      content = this.props.children.toString();
      content = content.replace("**header**", jwtParts[0]);
      content = content.replace("**payload**", jwtParts[1]);
      content = content.replace("**signature**", jwtParts[2]);
    }

    let overflow = {
      "overflowWrap": "break-word",
      "wordBreak": "break-all",
      "textAlign": "left"
    };


    return (
      <Slide>
        <Subtitle>Anatomy of a JWT</Subtitle>
        <Columns>
          <Text>
            <div className="jwt">
              {this.props.partial && this.props.highlight === "header" &&
                <span style={{"color": colors.header}}>{jwtParts[0]}</span>
              }
              {this.props.partial && this.props.highlight === "payload" &&
                <span style={{"color": colors.payload}}>{jwtParts[1]}</span>
              }
              {this.props.partial && this.props.highlight === "signature" &&
                <span style={{"color": colors.signature}}>{jwtParts[2]}</span>
              }
              {!this.props.partial && (
                <span>
                  <span style={{"color": colors.header}}>{jwtParts[0]}</span>.
                  <span style={{"color": colors.payload}}>{jwtParts[1]}</span>.
                  <span style={{"color": colors.signature}}>{jwtParts[2]}</span>
                </span>
              )}

            </div>
          </Text>
          <Text>
            {this.props.code &&
              <span>
                <pre style={{"textAlign": "left"}}>
                {this.props.children}
                </pre>
              </span>
            }

            {!this.props.code &&
              <span style={overflow}>{content}</span>
            }
          </Text>
        </Columns>
      </Slide>
    )
  }
}