import CryptoJS from "crypto-js";

const chars = "0123456789abcdefghijklmnopqrstuvwxyz";

function convertToBaseX(num) {
  let numbers = [];
  let solution = "";
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

function findKey(jwt) {
  console.log("Start");

  if (!jwt) {
    return alert("Need a JWT");
  }

  const jwtParts = jwt.split(".");
  const data = jwtParts[0] + "." + jwtParts[1];

  let sig = "";

  let key = 0;
  let convertedKey;

  let p = new Promise((resolve, reject) => {

    while(sig !== jwtParts[2]) {
      key++;
      convertedKey = convertToBaseX(key);

      sig = CryptoJS.HmacSHA256(data, convertedKey).toString(CryptoJS.enc.Base64);
      sig = sig.replace(/\=/ig, "");
      sig = sig.replace(/\+/ig, "-");
      sig = sig.replace(/\//ig, "_");

      if (convertedKey.length >= 5) {
        console.log("Key is longer than 5 characters, this is going to take forever.");
        reject();
        break;
      }
    }

    resolve(convertedKey);
  });


  // alert("Your 'secret' key is: " + convertedKey);

  return p;
}

export default findKey;