import React, { Component } from "react";
import { Slide, Title, Columns, Text} from "@sambego/diorama";
import findKey from "../helpers/bruteforce";

export default class BruteForce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: "",
      currentStatus: ""
    };

    this.handleGetJwt = this.handleGetJwt.bind(this);
    this.bruteForce = this.bruteForce.bind(this);
  }

  handleGetJwt(event) {
    event.preventDefault();
    this.setState({jwt: localStorage.getItem("accessToken")});
  }

  bruteForce() {
    let self = this;
    let startTime = (new Date()).getTime();
    this.setState({currentStatus: "Trying to brute force the key..."});
    setTimeout(() => {
      findKey(this.state.jwt).then(key => {
        let delay = Math.round(((new Date()).getTime() - startTime) / 1000);
        self.setState({currentStatus: `Found key: '${key}' in ${delay} seconds`});
      });
    }, 0);
  }

  render() {
    let textareaStyle = {
      "fontSize": "2em"
    };

    return (
      <Slide>
        <Title>Finding the Key</Title>
        <div>Available on CodePen <a href="https://codepen.io/joel__lord/pen/ROyjdy?editors=1011">https://codepen.io/joel__lord/pen/ROyjdy</a></div>
        <Columns>
          <div>
            <div className="btnGroup">
              <button onClick={this.handleGetJwt}>Load JWT</button>
            </div>
            <br/>
            <br/>
            <textarea
              onChange={this.handleTextareaChange}
              value={this.state.jwt}
              style={textareaStyle} rows="10" cols="40"></textarea>
          </div>
          <div>
            <button onClick={this.bruteForce}>Find the Key</button><br/>
            <Text>{this.state.currentStatus}</Text>
          </div>
        </Columns>
      </Slide>
    )
  }
}