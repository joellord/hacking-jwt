import React, { Component } from 'react';
import { Deck, Slide, Image, Title, Text, Subtitle, List, Footer } from '@sambego/diorama';

import CodeSlide from "./components/CodeSlide";
import SectionSlide from "./components/SectionSlide";

import TalkTitle from "./slides/TalkTitle";
import About from "./slides/About";
import OAuth from "./slides/OAuth";
import OAuthGrant from "./slides/OAuthGrant";
import JWT from "./slides/JWT";
import JwtAnatomy from "./slides/JwtAnatomy";
import JwtEditor from "./slides/JWTEditor";
import BruteForce from "./slides/BruteForce";
import Login from "./slides/Login";
import Callback from "./slides/Callback";
import ContactAPI from "./slides/ContactAPI";
import ThankYou from "./slides/ThankYou";
import Pitfall from "./slides/Pitfall";

import ImgStickers from "./img/ihavestickers.jpg";
import ImgAuthCode1 from "./img/oauth-authcode-1.svg";
import ImgAuthCode2 from "./img/oauth-authcode-2.svg";
import ImgAuthCode3 from "./img/oauth-authcode-3.svg";
import ImgAuthCode4 from "./img/oauth-authcode-4.svg";
import ImgAuthCode5 from "./img/oauth-authcode-5.svg";
import ImgAuthCode6 from "./img/oauth-authcode-6.svg";
import ImgAuthCode7 from "./img/oauth-authcode-7.svg";
import ImgAuthCode8 from "./img/oauth-authcode-8.svg";
import ImgAuthCode9 from "./img/oauth-authcode-9.svg";
import ImgImplicit1 from "./img/oauth-implicit-1.svg";
import ImgImplicit2 from "./img/oauth-implicit-2.svg";
import ImgImplicit3 from "./img/oauth-implicit-3.svg";
import ImgImplicit4 from "./img/oauth-implicit-4.svg";
import ImgImplicit5 from "./img/oauth-implicit-5.svg";
import ImgImplicit6 from "./img/oauth-implicit-6.svg";
import ImgImplicit7 from "./img/oauth-implicit-7.svg";
import ImgImplicit8 from "./img/oauth-implicit-8.svg";
import ImgImplicit9 from "./img/oauth-implicit-9.svg";
import ImgAuthServer1 from "./img/auth-server-1.svg";
import ImgAuthServer2 from "./img/auth-server-2.svg";
import ImgAuthServer3 from "./img/auth-server-3.svg";
import ImgAuthServer4 from "./img/auth-server-4.svg";
import ImgAuthHeader from "./img/authheader.png";
import ImgPitfall1 from "./img/signature.jpg";
import ImgPitfall2 from "./img/none.jpg";
import ImgPitfall3 from "./img/weak.jpg";
import ImgPitfall4 from "./img/confused.jpg";
import ImgPitfall5 from "./img/storage.jpg";
import ImgWoohoo from "./img/woohoo.gif";
import ImgBye from "./img/bye1.gif";

import './App.css';

class App extends Component {
  render() {
    const footer = <Footer left="@joel__lord&nbsp;&nbsp;&nbsp;#VTCC11" right="&nbsp;" />

    const titleStyleForImageSlide = {
      position: "absolute",
      left: "50%",
      top: "35%",
      transform: "translate3d(-50%, -50%, 0)",
      color: "#fff",
      margin: 0
    };

    const titleStyleForWoohoo = Object.assign({}, titleStyleForImageSlide, {top: "15%"});

    return (
      <Deck footer={footer} swipeToChange={false}>
        <TalkTitle />
        <About />
        <Slide>
          <Image src={ImgWoohoo} full />
          <Title style={titleStyleForWoohoo}>Twitter Notifications</Title>
        </Slide>
        <Slide>
          <Image src={ImgStickers} full />
          <Title style={titleStyleForImageSlide}>I Have Stickers</Title>
        </Slide>
        <OAuth />

        <SectionSlide text="Authorization Code Grant" background="#77adff" color="#fff" />

        <OAuthGrant flow="Authorization Code" image={ImgAuthCode1} />
        <OAuthGrant flow="Authorization Code" image={ImgAuthCode2} />
        <OAuthGrant flow="Authorization Code" image={ImgAuthCode3} />
        <OAuthGrant flow="Authorization Code" image={ImgAuthCode4} />
        <OAuthGrant flow="Authorization Code" image={ImgAuthCode5} />
        <OAuthGrant flow="Authorization Code" image={ImgAuthCode6} />
        <OAuthGrant flow="Authorization Code" image={ImgAuthCode7} />
        <OAuthGrant flow="Authorization Code" image={ImgAuthCode8} />
        <OAuthGrant flow="Authorization Code" image={ImgAuthCode9} />

        <SectionSlide text="Implicit Grant" background="#77adff" color="#fff" />

        <OAuthGrant flow="Implicit Flow" image={ImgImplicit1} />
        <OAuthGrant flow="Implicit Flow" image={ImgImplicit2} />
        <OAuthGrant flow="Implicit Flow" image={ImgImplicit3} />
        <OAuthGrant flow="Implicit Flow" image={ImgImplicit4} />
        <OAuthGrant flow="Implicit Flow" image={ImgImplicit5} />
        <OAuthGrant flow="Implicit Flow" image={ImgImplicit6} />
        <OAuthGrant flow="Implicit Flow" image={ImgImplicit7} />
        <OAuthGrant flow="Implicit Flow" image={ImgImplicit8} />
        <OAuthGrant flow="Implicit Flow" image={ImgImplicit9} />

        <Slide>
          <Title>Tokens</Title>
          <List>
            <li>WS-*</li>
            <li>SAML</li>
            <li>Custom stuff</li>
            <li>JWT</li>
          </List>
        </Slide>

        <JWT />

        <SectionSlide text="Anatomy of a JWT" background="#77adff" color="#fff" />

        <JwtAnatomy>A simple JWT</JwtAnatomy>
        <JwtAnatomy highlight="all">Three parts separated by "."</JwtAnatomy>
        <JwtAnatomy highlight="header">Header</JwtAnatomy>
        <JwtAnatomy highlight="header" partial>Header</JwtAnatomy>
        <JwtAnatomy highlight="header" partial>atob(**header**);</JwtAnatomy>
        <JwtAnatomy highlight="header" partial code>
            &#123;<br/>
            &nbsp;&nbsp;"alg": "HS256",<br/>
            &nbsp;&nbsp;"typ": "JWT"<br/>
            &#125;
        </JwtAnatomy>
        <JwtAnatomy highlight="payload">Payload</JwtAnatomy>
        <JwtAnatomy highlight="payload" partial>Payload</JwtAnatomy>
        <JwtAnatomy highlight="payload" partial>atob(**payload**);</JwtAnatomy>
        <JwtAnatomy highlight="payload" partial code>
          &#123;<br/>
          &nbsp;&nbsp;"sub": "1234567890",<br/>
          &nbsp;&nbsp;"name": "John Doe",<br/>
          &nbsp;&nbsp;"iat": 1516239022<br/>
          &#125;
        </JwtAnatomy>
        <JwtAnatomy highlight="signature">Signature</JwtAnatomy>
        <JwtAnatomy highlight="signature" partial>Signature</JwtAnatomy>
        <JwtAnatomy highlight="signature" partial code>
          hmacsha256(<br/>
          &nbsp;&nbsp;header + payload,<br/>
          &nbsp;&nbsp;SECRET_KEY<br/>
          )
        </JwtAnatomy>

        <SectionSlide text="Using JWTs to Secure Apps" background="#77adff" color="#fff" />

        <Slide>
          <Title>Securing Applications</Title>
          <Subtitle>Authorization Server</Subtitle>
        </Slide>

        <OAuthGrant flow="Authorization Server" image={ImgAuthServer1} />
        <OAuthGrant flow="Authorization Server" image={ImgAuthServer2} />
        <OAuthGrant flow="Authorization Server" image={ImgAuthServer3} />
        <OAuthGrant flow="Authorization Server" image={ImgAuthServer4} />

        <CodeSlide>
          {`
app.post("/login", function(req, res) {
  // Validate request
  if (!req.body.username || !req.body.password) {
    return res.status(400).send(\`Need username and password\`);
  }
});
          `}
        </CodeSlide>
        <CodeSlide>
          {`
app.post("/login", function(req, res) {
  // Validate request
  // ...

  // Find user in DB
  var user = users.find(function(u) {
    return (u.username === req.body.username &&
      u.password === req.body.password);
  });
  if (!user) return res.status(401).send(\`User not found\`);
});
          `}
        </CodeSlide>
        <CodeSlide>
          {`
app.post("/login", function(req, res) {
  // Validate request
  // ...

  // Find user in DB
  // ...

  // Generate a JWT
  var token = jwt.sign({
    sub: user.id,
    username: user.username,
    admin: false
  }, "abcd");
});
          `}
        </CodeSlide>
        <CodeSlide>
          {`
app.post("/login", function(req, res) {
  // Validate request
  // ...

  // Find user in DB
  // ...

  // Generate a JWT
  // ...

  // Redirect the user with a JWT
  res.redirect(req.body.callback + "#access_token=" + token);
});
          `}
        </CodeSlide>

        <Slide>
          <Title>Securing Applications</Title>
          <Subtitle>Front End</Subtitle>
        </Slide>

        <Slide>
          <Subtitle>Add Authorization Header</Subtitle>
          <Image src={ImgAuthHeader} />
        </Slide>

        <Slide>
          <Title>Securing Applications</Title>
          <Subtitle>API</Subtitle>
        </Slide>

        <CodeSlide>
          {`
app.get("/admindata", (req, res) => {
  //Check for an Authorization header
  if (!req.headers.authorization) {
    res.status(401).send("No authorization header found");
  }
});
          `}
        </CodeSlide>
        <CodeSlide>
        {`
app.get("/admindata", (req, res) => {
  //Check for an Authorization header
  //...

  //Get the JWT (Authorization: Bearer ..token..
  const jwt = req.headers.authorization.split(" ")[1];
  const payload = jwt.split(".")[1];
  payload = JSON.parse(Buffer.from(payload, "base64"));
});
          `}
        </CodeSlide>
        <CodeSlide>
        {`
app.get("/admindata", (req, res) => {
  //Check for an Authorization header
  //...

  //Get the JWT (Authorization: Bearer ..token..
  //...

  //Check permissions
  if (payload.admin) {
    res.status(200).send("You have admin rights");
  } else {
    res.status(400).send("Can't show you this");
  }
});
          `}
        </CodeSlide>

        <SectionSlide text="Demo Time!" background="#77adff" color="#fff" />

        <Login title="" authServer="http://localhost:8080" />

        <Callback/>

        <ContactAPI />

        {/*<JwtEditor/>*/}
        <Slide>
          <Title>Deconstructing a JWT</Title>
        </Slide>

        <ContactAPI />

        <Pitfall img={ImgPitfall1} number="1" title="No Signature Check" />

        <Slide>
          <Title>Signature Checks</Title>
          <List>
            <li>Prevents Tampering</li>
            <li>Always check, don't rely on JWT presence</li>
          </List>
        </Slide>

        <CodeSlide title="On the API">
          {`
// Validate authenticity
const jwtParts = jwt.split(".");
const data = jwtParts[0] + "." + jwtParts[1];
          `}
        </CodeSlide>

        <CodeSlide title="On the API">
        {`
// Validate authenticity
// ...
switch(jwtParts[0].alg) {
  case "HS256":
  //...
}
          `}
        </CodeSlide>

        <CodeSlide title="On the API">
          {`
// Validate authenticity
// ...
// Generate a signature
signature = crypto
  .createHmac("sha256", "abcd")
  .update(data)
  .digest("base64");
          `}
        </CodeSlide>

        <CodeSlide title="On the API">
        {`
// Validate authenticity
// Generate a signature
// ...
// Compare with token
if (signature !== jwtParts[2]) {
  res.status(401).send("Invalid signature");
  return;
}
          `}
        </CodeSlide>

        <ContactAPI url="/adminwithsig" />

        <JwtEditor />

        <ContactAPI url="/adminsigcheck" />

        <Pitfall img={ImgPitfall2} number="2" title="The alg: none Attack" />

        <Slide>
          <Subtitle>Alg:None</Subtitle>
          <List>
            <li>Part of the standard</li>
            <li>If you don't accept it, check for it</li>
          </List>
        </Slide>

        <BruteForce/>

        <JwtEditor/>

        <ContactAPI url="/adminwithsig" />

        <Pitfall img={ImgPitfall3} number="3" title="Weak Secret Key" />

        <Slide>
          <Title>Signatures</Title>
          <List>
            <li>Keep It Secret</li>
            <li>Don't use HMAC, too easy to compute</li>
            <li>Use strong keys if you do (64 chars, [a-zA-Z0-9+_-])</li>
          </List>
        </Slide>

        <CodeSlide title="Longer secrets">
          {`
let token = jwt.sign({
  sub: user.id,
  admin: false,
  username: user.username
}, "This-Is_a_V3ry/LongKey andIs+Much!Better");
          `}
        </CodeSlide>

        <Login title="New Secure Server Login" authServer="http://localhost:8181" />

        <Callback />

        <ContactAPI url="/adminwithsig" />

        <Pitfall img={ImgPitfall4} number="4" title="Confused Deputy Problem" />

        <Slide>
          <Title>Confused Deputy</Title>
          <Text>A confused deputy is a legitimate, more privileged computer program that is tricked by another program into misusing its authority on the system</Text>
        </Slide>

        <Slide>
          <Title>Extra Claims</Title>
          <List>
            <li>iss</li>
            <li>aud</li>
            <li>exp</li>
          </List>
        </Slide>

        <CodeSlide title="Confused Deputy">
          {`
if (payload.iss !== "ugly-little-auth-server") {
  res.status(401).send("I don't trust this server");
  return;
}

if (payload.aud !== "my-simple-api") {
  res.status(401).send("This token is not meant for this API");
  return;
}
          `}
        </CodeSlide>

        <ContactAPI url="/adminclaimcheck" />

        <Slide>
          <Subtitle>Or checking the AUD</Subtitle>
        </Slide>

        <ContactAPI url="/adminaudcheck" />

        <Pitfall img={ImgPitfall5} number="5" title="Storing your JWTs and impersonation" />

        <Slide>
          <Title>DON'T STORE YOUR JWTs</Title>
          <List>
            <li>No storage is safe</li>
            <li>localStorage is the best but check your node_modules folder</li>
            <li>Keep them in memory</li>
          </List>
        </Slide>

        <Slide>
          <Title>Other attack Vectors</Title>
          <List>
            <li>Expiry, One-Time Usage, Revocation</li>
            <li>Elliptic Curve Attack</li>
            <li>This is just the JWT!</li>
          </List>
        </Slide>

        <Slide>
          <Title>Some Best Practices</Title>
          <List>
            <li>Simply using JWTs doesn't make your system secure</li>
            <li></li>
            <li></li>
            <li></li>
          </List>
        </Slide>
        <Slide>
          <Title>Some Best Practices</Title>
          <List>
            <li>Simply using JWTs doesn't make your system secure</li>
            <li>Use proven JWT libraries on Auth server and API</li>
            <li></li>
            <li></li>
          </List>
        </Slide>
        <Slide>
          <Title>Some Best Practices</Title>
          <List>
            <li>Simply using JWTs doesn't make your system secure</li>
            <li>Use proven JWT libraries on Auth server and API</li>
            <li>Use RS256 instead of SHA256 for signature</li>
            <li></li>
          </List>
        </Slide>
        <Slide>
          <Title>Some Best Practices</Title>
          <List>
            <li>Simply using JWTs doesn't make your system secure</li>
            <li>Use proven JWT libraries on Auth server and API</li>
            <li>Use RS256 instead of SHA256 for signature</li>
            <li>Use trusted third party services</li>
          </List>
        </Slide>

        <Slide>
          <Title>Resources</Title>
          <Text>Here are some resources</Text>
          <List>
            <li><a href="https://jwt.io">Jwt.io</a></li>
            <li><a href="https://codepen.io/joel__lord/pen/ROyjdy">Codepen for Brute force</a></li>
            <li><a href="https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/">Blog Post that inspired this talk</a></li>
          </List>
        </Slide>

        <Slide>
          <Image src={ImgBye} full />
        </Slide>

        <ThankYou />

      </Deck>
    );
  }
}

export default App;
