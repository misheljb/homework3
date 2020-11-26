// Assignment Code
console.log("Im connected");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var Character;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialcharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "~",
  "?",
  "<",
  ">",
];
var uppercasestring = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercasestring = "abcdefghijklmnopqrstuvwxyz";
var uppercase = uppercasestring.split("")
var lowercase = lowercasestring.split("")
console.log(uppercase);
console.log(lowercase);


var passwordoptions = [];

// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Let's get started");

  var passlength = prompt("How long would you like your password to be?");
  if (passlength <= 8 || passlength >= 128) {
    alert("Please choose numbers between 8 and 128 characters");
    return;
  } else {
    var addNumbers = confirm("Would you like to add numbers?");
    if (addNumbers === true) {
      passwordoptions = passwordoptions.concat(numbers);
      console.log(passwordoptions);
    }
  }
  var addSpecialcharacters = confirm(
    "Would you like to add Special Characters?"
  );
  if (addSpecialcharacters === true) {
    passwordoptions = passwordoptions.concat(specialcharacters);
    console.log(passwordoptions);
  }

  var addUC = confirm("Would you like to add Upper Case letters?");
  if (addUC === true) {
    passwordoptions = passwordoptions.concat(uppercase);
    console.log(passwordoptions);
  }

  var addLC = confirm("Would you like to add Lower Case letters?");
  if (addLC === true) {
    passwordoptions = passwordoptions.concat(lowercase);
    console.log(passwordoptions);
  }

  if (
    addSpecialcharacters === false &&
    addLC === false &&
    addNumbers === false &&
    addUC === false
  ) {
    alert("Please select at least one character");
    return;
  }
  generatePassword()

});

function generatePassword(){
  // randomly select characters that have been choosen// 
  var randomchar = Math.floor(Math.random() * 100)
  console.log(randomchar)

 
  return
}
