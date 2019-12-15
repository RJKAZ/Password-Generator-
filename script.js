
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~";
var possibilities = "";

var finalPassword = "";

alert("Welcome! Please click the generate button below");

function makeAPassword() {
  var length = prompt("First, please choose a length that is 8-128 characters long.");
 
  if(length < 8 || length > 128) {
    alert("Must be between 8 and 128");
    return makeAPassword();
  }

  var symbols = confirm("Do you want symbols?");
  if (symbols === true) {
    possibilities = possibilities + symbols;
  }

  var uppercase = confirm("Do you want uppercase characters?");
  if (uppercase === true) {
    possibilities = possibilities + uppercase;
  }

  var lowercase = confirm("Do you want lowercase characters?")
  if (lowercase === true) {
    possibilities = possibilities + lowercase;
  }

  var numbers = confirm("Do you want any numbers?");
  if (numbers === true) {
    possibilities = possibilities + numbers;
  }


  for (var i = 0; i < length; i++) {
    var num = Math.floor(Math.random() * possibilities.length)
    var randomChar = possibilities[num];
    finalPassword = finalPassword + randomChar;
  }

 
  document.getElementById("password").value = finalPassword;
}

var button = document.getElementById("generate");
button.addEventListener("click", makeAPassword);

function myFunction() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert('Copied the password: ' + copyText.value);
}