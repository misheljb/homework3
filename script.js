// Assignment Code
console.log("Im connected")
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var numbers = [0,1,2,3,4,5,6,7,8,9,]
var specialcharacters = ["!","@","#","$","%","^","&","*","~","?","<",">"]
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"

var passwordoptions =[]


// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
  event.preventDefault()
  alert("Let's get started")

  var passlength = prompt("How long would you like your password to be?")
      if (passlength > 128 ) { 
        alert ("Please choose number between 8 and 128 characters")
      } else {
        var addNumbers = confirm("Would you like to add numbers?")
      if (addNumbers) {
        passwordoptions.concat(numbers)
      }
    
    
    
    }
        

      




})

