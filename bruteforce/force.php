<?

function convertToKey($num) {
  $numbers = [];
  $solution = "";
  $chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  $base = strlen($chars);
  while ($num > 0) {
    $numbers[] = ($num % $base);
    $num = floor($num/$base);
  }
  for ($i = count($numbers) - 1; $i >= 0; $i--) {
    $solution .= $chars[$numbers[$i]];
  }
  
  return $solution;
}

$jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicGVybWlzc2lvbnMiOlsiZnVsbF9hY2Nlc3MiXSwiaWF0IjoxNTE2MjM5MDIyfQ.n2qN9qUw_o8RBxxc5ezi20imphLpMg5xTGXUcPTYztA";

$parts = explode(".", $jwt);
$msg = $parts[0].".".$parts[1];

$sig = "";

$key = 0;
$start = time();

echo "Please wait while we try to find the key...";

while($sig != $parts[2]) {
  $key++;
  $convertedKey = convertToKey($key);
  $s = hash_hmac("sha256", $msg, $convertedKey, true);
  $sig = base64_encode($s);
  $sig = str_replace("=", "", $sig);
  $sig = str_replace("+", "-", $sig);
  $sig = str_replace("/", "_", $sig);
  // if (($key % 100000)) {
  //     echo("Trying key ".$convertedKey."\n");
  // }
  if (strlen($convertedKey) >= 6) {
    echo "Key is longer than 5 characters, this is going to take forever.";
    break;
  }
}

$end = time();
$delay = $end - $start;
$minutes = floor($delay/60);
$minutes > 0 ? $seconds = $delay % $minutes : $seconds = $delay;
echo "Got it! \n'Secret' key is: ".$convertedKey."\nFound in ".$minutes." minutes, ".$seconds." seconds";
