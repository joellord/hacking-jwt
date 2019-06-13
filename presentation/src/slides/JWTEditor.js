import React, { Component } from "react";
import { Slide, Title, Columns} from "@sambego/diorama";
import CryptoJS from "crypto-js";

export default class ContactAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: "",
      header: "",
      payload: "",
      signature: ""
    };

    this.handleGetJwt = this.handleGetJwt.bind(this);
    this.encodeJwt = this.encodeJwt.bind(this);
    this.decodeJwt = this.decodeJwt.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
  }

  handleTextareaClick(event) {
    event.preventDefault();
  }

  handleGetJwt(event) {
    event.preventDefault();
    this.setState({jwt: localStorage.getItem("accessToken")});
  }

  handleTextareaChange(event) {
    event.preventDefault();
    let newState = {};
    newState[`${event.target.id}`] = event.target.value;
    this.setState(newState);
  }

  decodeJwt() {
    let jwt = this.state.jwt;
    let jwtParts = jwt.split(".");
    let newState = {
      header: atob(jwtParts[0]),
      payload: atob(jwtParts[1]),
      signature: jwtParts[2]
    };
    this.setState(newState);
  }

  encodeJwt() {
    let jwt = this.state.jwt;
    let jwtParts = jwt.split(".");
    jwtParts[0] = btoa(this.state.header);
    jwtParts[1] = btoa(this.state.payload);
    if (jwtParts[2] !== this.state.signature) {
      // Sig changed, generate new signature
      let alg = JSON.parse(this.state.header).alg;
      if (alg === "none") {
        jwtParts[2] = " "
      } else {
        let sig = CryptoJS.HmacSHA256(`${jwtParts[0]}.${jwtParts[1]}`, this.state.signature).toString(CryptoJS.enc.Base64);
        sig = sig.replace("=", "");
        sig = sig.replace("+", "-");
        sig = sig.replace("/", "_");
        jwtParts[2] = sig;
      }
    }
    jwt = jwtParts.join(".");
    this.setState({jwt: jwt});
  }

  render() {
    let textareaStyle = {
      "fontSize": "2em"
    };
    let decEncBtnStyle = {
      minWidth: "15px"
    };

    return (
      <Slide>
        <Title>JWT Editor</Title>
        <div>You should use <a href="https://jwt.io">https://jwt.io</a></div>
        <Columns>
          <div>
            <button onClick={this.handleGetJwt}>Load JWT</button>
            <br/>
            <br/>
            <textarea
              id="jwt"
              onChange={this.handleTextareaChange}
              onClick={this.handleTextareaClick}
              value={this.state.jwt}
              style={textareaStyle} rows="10" cols="40"></textarea>
          </div>
          <div>
            <button style={decEncBtnStyle} onClick={this.decodeJwt}> --&gt; </button><br/>
            <button style={decEncBtnStyle} onClick={this.encodeJwt}> &lt;-- </button>
          </div>
          <div>
            <div>Header</div>
            <textarea
              id="header"
              value={this.state.header}
              onChange={this.handleTextareaChange}
              onClick={this.handleTextareaClick}
              rows="5" cols="40" style={textareaStyle}></textarea>
            <div>Payload</div>
            <textarea
              id="payload"
              value={this.state.payload}
              onChange={this.handleTextareaChange}
              onClick={this.handleTextareaClick}
              rows="5" cols="40" style={textareaStyle}></textarea>
            <div>Signature</div>
            <textarea
              id="signature"
              value={this.state.signature}
              onChange={this.handleTextareaChange}
              onClick={this.handleTextareaClick}
              rows="5" cols="40" style={textareaStyle}></textarea>
          </div>
        </Columns>
      </Slide>
    )
  }
}