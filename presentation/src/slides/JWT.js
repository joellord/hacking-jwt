import React, { Component } from "react";
import { Slide, Image, Subtitle, Columns, List } from '@sambego/diorama';
// import ImgJwt from "../img/Access-Token.svg";
import ImgJwtLogo from "../img/jwt.svg";

export default class TalkTitle extends Component {
  render() {
    return (
      <Slide>
        <Columns>
          <div>
            <Image style={{width: '500px'}} src={ImgJwtLogo} color="" />
          </div>
          <div>
            <Subtitle className="align-left">JSON Web Token</Subtitle>
            <List className="align-left">
              <li>RFC 7519 -- proposed</li>
              <li>JWTs, not Jots</li>
              <li>Used to exchange information between servers</li>
            </List>
          </div>
        </Columns>
      </Slide>
    )
  }
}