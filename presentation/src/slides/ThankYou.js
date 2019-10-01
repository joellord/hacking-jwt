import React, { Component } from "react";
import { Slide, Title, Text, Subtitle } from "@sambego/diorama";

export default class ThankYou extends Component {
  render() {
    return (
      <Slide>
        <Title>Thank You!</Title>
        <Text>Hacking JWTs</Text>
        <Text>Auth0 Online Meetup - October 1, 2019</Text>
        <br/>
        <Subtitle><a href="https://ezurl.to/hackingjwt" style={{"textTransform": "none"}}>ezurl.to/hackingjwt</a></Subtitle>
      </Slide>
    )
  }
}