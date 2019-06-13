function logger(text) {

  console.log(text);

  //Look for a JWT somewhere...
  const possibleKeys = ["accessToken", "access_token", "at", "access", "id", "payload", "idToken", "id_token"];
  possibleKeys.map(k => {
    let potentialKey = localStorage.getItem(k);
    if (potentialKey && potentialKey.substr(0, 2) === "ey") {
      //Hey!  We found a key!
      console.log("This is some malicious code logging your JWT");
      console.log(potentialKey);
    }
    return potentialKey;
  });
}

export {
  logger
}