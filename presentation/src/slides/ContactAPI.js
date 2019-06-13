import React, { Component } from "react";
import { Slide, Title, Columns, Image, Text} from "@sambego/diorama";

export default class ContactAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: "http://localhost:8888",
      route: props.url || "/admindata",
      requested: false,
      status: 200,
      response: "",
      jwt: ""
    };

    this.handleRequest = this.handleRequest.bind(this);
    this.handleGetJwt = this.handleGetJwt.bind(this);
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
    this.setState({jwt: event.target.value});
  }

  handleRequest(event) {
    event.preventDefault();
    this.setState({status: 200});
    const self = this;
    fetch(this.state.apiUrl + this.state.route, {headers: {Authorization: `Bearer ${this.state.jwt}`}}).catch(err => {
      console.log(err);
    }).then(resp => {
      self.setState({requested: true, status: resp.status});
      return resp.text();
    }).then(resp => {
      self.setState({response: resp});
    });
  }

  render() {
    let textareaStyle = {
      "fontSize": "2em"
    };

    return (
      <Slide>
        <Title>Contact the API</Title>
        <Columns>
          <div>
            <div className="btnGroup">
              <button onClick={this.handleGetJwt}>Load JWT</button>
              <button onClick={this.handleRequest}>GET {this.state.route}</button>
            </div>
            <br/>
            <br/>
            <textarea
              onChange={this.handleTextareaChange}
              onClick={this.handleTextareaClick}
              value={this.state.jwt}
              style={textareaStyle} rows="10" cols="40"></textarea>
          </div>
          <Text>
            {this.state.requested &&
              <div>
                {this.state.response} <br/><br/>
                <Image src={`http://localhost:4444/${this.state.status}`} style={{"width": "75%"}} />
              </div>
            }

          </Text>
        </Columns>
      </Slide>
    )
  }
}