const crypto = require("crypto");

function convertToBaseX(num) {
  let numbers = [];
  let solution = "";
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  let base = chars.length;
  while (num > 0) {
    numbers.push(num % base);
    num = Math.floor(num/base);
  }
  
  for (let i = numbers.length - 1; i >= 0; i--) {
    solution += chars[numbers[i]];
  }
  
  return solution;
}

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJhZG1pbiI6dHJ1ZX0.xddzEnho-VMqOtS1pWy3v_Et4V1n0ns56Al0tpxwguk";

const jwtParts = jwt.split(".");
const data = jwtParts[0] + "." + jwtParts[1];

let sig = "";

let key = 0;
let convertedKey;
const startTime = (new Date()).getTime();

console.log("Please wait while we try to find the key...");

while(sig != jwtParts[2]) {
  key++;
  convertedKey = convertToBaseX(key);

  sig = crypto.createHmac("sha256", convertedKey).update(data).digest("base64");
  sig = sig.replace("=", "");
  sig = sig.replace("+", "-");
  sig = sig.replace("/", "_");

  if (!(key % 100000)) {
      console.log("Trying key " + convertedKey);
  }
  if (convertedKey.length >= 6) {
    console.log("Key is longer than 5 characters, this is going to take forever.");
    break;
  }
}

const endTime = (new Date()).getTime();
const delay = parseInt((endTime - startTime)/1000);
let minutes = Math.floor(delay/60);
let seconds;
minutes > 0 ? seconds = delay % minutes : seconds = delay;

console.log("Got it! \n'Secret' key is: " + convertedKey + "\nFound in " + minutes + " minutes, " + seconds + " seconds");
