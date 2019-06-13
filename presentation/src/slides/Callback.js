import React, { Component } from "react";
import { Slide, Title, Text, Columns } from '@sambego/diorama';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStoreBtn: true,
      waitForIt: false,
      showDecodeBtn: false,
      payload: null
    };

    this.handleStoreJwt = this.handleStoreJwt.bind(this);
    this.handleDecode = this.handleDecode.bind(this);
  }
  handleStoreJwt() {
    let jwt = window.location.hash.split("=")[1];
    localStorage.setItem("accessToken", jwt);
    this.setState({waitForIt: true, showStoreBtn: false});
    const self = this;
    setTimeout(() => {
      self.setState({waitForIt: false, showDecodeBtn: true})
    }, 3000)
  }
  handleDecode() {
    let payload = atob(localStorage.getItem("accessToken").split(".")[1]);
    payload = payload.replace("{", "{<br/>&nbsp;&nbsp;");
    payload = payload.replace(/,/ig, ",<br/>&nbsp;&nbsp;");
    payload = payload.replace("}", "<br/>}");
    this.setState({showDecodeBtn: false, payload: payload});
  }
  render() {
    let jwt = `${window.location.hash.split("=")[1]}`;
    return (
      <Slide>
        <Title>And we're back to our app</Title>
        <Text>
          Here is the JWT we got back from the server
        </Text>
        <Columns>
          <Text>
            <div className="jwt">
              {jwt}
            </div>
          </Text>
          <div>
            {this.state.showStoreBtn &&
              <button onClick={this.handleStoreJwt}>Store to localStorage</button>
            }
            {this.state.waitForIt &&
              <Text>Stored...</Text>
            }
            {this.state.showDecodeBtn &&
              <button onClick={this.handleDecode}>Decode JWT</button>
            }
            {this.state.payload &&
              <pre className="align-left" dangerouslySetInnerHTML={{__html: this.state.payload}}>
              </pre>
            }
          </div>
        </Columns>

      </Slide>
    )
  }
}