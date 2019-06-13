const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
app.use(cors());

app.get("/admindata", (req, res) => {
  console.log("Requesting /admindata");
  //Check for an Authorization header
  if (!req.headers.authorization || !req.headers.authorization.match(" ")) {
    res.status(401).send("No authorization header found");
    return;
  }

  //Get the JWT (Authorization: Bearer ..token..
  const jwt = req.headers.authorization.split(" ")[1];
  let payload = jwt.split(".")[1];
  payload = JSON.parse(Buffer.from(payload, "base64"));

  console.log("JWT found, payload: ", JSON.stringify(payload));

  //Check permissions
  if (payload.admin) {
    res.status(200).send("You have admin rights");
  } else {
    res.status(400).send("Yo dawg, you ain't Admin");
  }
});

app.get("/adminwithsig", (req, res) => {
  console.log("Requesting /adminwithsig");
  //Check for an Authorization header
  if (!req.headers.authorization || !req.headers.authorization.match(" ")) {
    res.status(401).send("No authorization header found");
    return;
  }

  //Get the JWT (Authorization: Bearer ..token..
  const jwt = req.headers.authorization.split(" ")[1];
  let payload = jwt.split(".")[1];
  payload = JSON.parse(Buffer.from(payload, "base64"));

  console.log("JWT found, payload: ", JSON.stringify(payload));

  // Validate authenticity
  const jwtParts = jwt.split(".");
  const data = jwtParts[0] + "." + jwtParts[1];
  signature = crypto.createHmac("sha256", "abcd").update(data).digest("base64");
  signature = signature.replace(/\=/ig, "");
  signature = signature.replace(/\//ig, "_");
  signature = signature.replace(/\+/ig, "-");

  let signature2 = crypto.createHmac("sha256", "This-Is_a_V3ry/LongKey andIs+Much!Better").update(data).digest("base64");
  signature2 = signature2.replace(/\=/ig, "");
  signature2 = signature2.replace(/\//ig, "_");
  signature2 = signature2.replace(/\+/ig, "-");

  console.log(signature, signature2, jwtParts[2]);

  if (signature !== jwtParts[2] && signature2 !== jwtParts[2]) {
    res.status(401).send("Invalid signature");
    return;
  }

  //Check permissions
  if (payload.admin) {
    res.status(200).send("You have admin rights");
  } else {
    res.status(400).send("Yo dawg, you ain't Admin");
  }
});

app.get("/adminsigcheck", (req, res) => {
  console.log("Requesting /adminsigcheck");

  //Check for an Authorization header
  if (!req.headers.authorization || !req.headers.authorization.match(" ")) {
    res.status(401).send("No authorization header found");
    return;
  }

  //Get the JWT (Authorization: Bearer ..token..
  const jwt = req.headers.authorization.split(" ")[1];
  let payload = jwt.split(".")[1];
  payload = JSON.parse(Buffer.from(payload, "base64"));

  console.log("JWT found, payload: ", JSON.stringify(payload));

  let header = jwt.split(".")[0];
  header = JSON.parse(Buffer.from(header, "base64"));

  // Validate authenticity
  switch(header.alg) {
    case "HS256":
      console.log("HS256");
      const jwtParts = jwt.split(".");
      const data = jwtParts[0] + "." + jwtParts[1];
      signature = crypto.createHmac("sha256", "abcd").update(data).digest("base64");
      signature = signature.replace(/\=/ig, "");
      signature = signature.replace(/\//ig, "_");
      signature = signature.replace(/\+/ig, "-");
      console.log("Comparing generated sig" , signature, "with original", jwtParts[2]);
      if (signature !== jwtParts[2]) {
        res.status(401).send("Invalid signature");
        return;
      }
      break;
    case "none":
      console.log("Sig check pass");
      break;
  }

  //Check permissions
  if (payload.admin) {
    res.status(200).send("You have admin rights");
  } else {
    res.status(400).send("Yo dawg, you ain't Admin");
  }

});

app.get("/adminclaimcheck", (req, res) => {
  console.log("Requesting /adminclaimcheck");
  //Check for an Authorization header
  if (!req.headers.authorization || !req.headers.authorization.match(" ")) {
    res.status(401).send("No authorization header found");
    return;
  }

  //Get the JWT (Authorization: Bearer ..token..
  const jwt = req.headers.authorization.split(" ")[1];
  let payload = jwt.split(".")[1];
  payload = JSON.parse(Buffer.from(payload, "base64"));

  console.log("JWT found, payload: ", JSON.stringify(payload));

  // Validate authenticity
  const jwtParts = jwt.split(".");
  const data = jwtParts[0] + "." + jwtParts[1];
  let signature = crypto.createHmac("sha256", "abcd").update(data).digest("base64");
  signature = signature.replace("=", "");
  signature = signature.replace("/", "_");
  signature = signature.replace("+", "-");

  let signature2 = crypto.createHmac("sha256", "This-Is_a_V3ry/LongKey andIs+Much!Better").update(data).digest("base64");
  signature2 = signature2.replace(/\=/ig, "");
  signature2 = signature2.replace(/\//ig, "_");
  signature2 = signature2.replace(/\+/ig, "-");

  console.log(signature, signature2, jwtParts[2]);

  if (signature !== jwtParts[2] && signature2 !== jwtParts[2]) {
    res.status(401).send("Invalid signature");
    return;
  }

  if (payload.iss !== "ugly-little-auth-server") {
    res.status(401).send("I don't trust this server");
    return;
  }

  if (payload.aud !== "my-simple-api") {
    res.status(401).send("This token is not meant for this API");
    return;
  }

  //Check permissions
  if (payload.admin) {
    res.status(200).send("You have admin rights");
  } else {
    res.status(400).send("Yo dawg, you ain't Admin");
  }
});

app.get("/adminaudcheck", (req, res) => {
  console.log("Requesting /adminclaimcheck");
  //Check for an Authorization header
  if (!req.headers.authorization || !req.headers.authorization.match(" ")) {
    res.status(401).send("No authorization header found");
    return;
  }

  //Get the JWT (Authorization: Bearer ..token..
  const jwt = req.headers.authorization.split(" ")[1];
  let payload = jwt.split(".")[1];
  payload = JSON.parse(Buffer.from(payload, "base64"));

  console.log("JWT found, payload: ", JSON.stringify(payload));

  // Validate authenticity
  const jwtParts = jwt.split(".");
  const data = jwtParts[0] + "." + jwtParts[1];
  let signature = crypto.createHmac("sha256", "abcd").update(data).digest("base64");
  signature = signature.replace("=", "");
  signature = signature.replace("/", "_");
  signature = signature.replace("+", "-");

  let signature2 = crypto.createHmac("sha256", "This-Is_a_V3ry/LongKey andIs+Much!Better").update(data).digest("base64");
  signature2 = signature2.replace(/\=/ig, "");
  signature2 = signature2.replace(/\//ig, "_");
  signature2 = signature2.replace(/\+/ig, "-");

  console.log(signature, signature2, jwtParts[2]);

  if (signature !== jwtParts[2] && signature2 !== jwtParts[2]) {
    res.status(401).send("Invalid signature");
    return;
  }

  if (payload.aud !== "my-simple-api") {
    res.status(401).send("This token is not meant for this API");
    return;
  }

  //Check permissions
  if (payload.admin) {
    res.status(200).send("You have admin rights");
  } else {
    res.status(400).send("Yo dawg, you ain't Admin");
  }
});

app.listen(8888, () => console.log("API started on 8888"));