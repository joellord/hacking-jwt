import React, { Component } from "react";
import { Slide, Image, Subtitle, Columns, List } from '@sambego/diorama';
import OAuthLogo from "../img/oauth.png";


export default class TalkTitle extends Component {
  render() {
    return (
      <Slide>
        <Columns>
          <div>
            <Image src={OAuthLogo} style={{width: "50vw", top: "0px"}} color="" />
          </div>
          <div>
            <Subtitle>OAuth 2.0</Subtitle>
            <List className="align-left">
              <li>Grants are the various flows</li>
              <li>Describes flows of communication between machines</li>
              <li>Tokens are used to shared the information</li>
              <li>Very loose standard</li>
            </List>
          </div>
        </Columns>
      </Slide>
    )
  }
}