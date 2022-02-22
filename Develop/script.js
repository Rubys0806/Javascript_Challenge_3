// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
   window.alert("Please choose the criteria you wish to include in your password.");
while (true) { 
  var passwordLength = window.prompt("How many characters would you like your password to be? (Password must be between 8-128 characters.)");
  if (passwordLength == null) {
    break;
  }
  passwordLengthInteger= parseInt(passwordLength);
  if(passwordLengthInteger < 8 || passwordLengthInteger > 128 || isNaN(passwordLengthInteger)){
    window.alert("Please choose a valid password length between 8-128 characters.");
    continue;
  }
var lowerCase = window.confirm("Would you like lowercase letters in your password?");
 
var upperCase = window.confirm("Would you like uppercase letters in your password?");

var numeric = window.confirm("Would you like numbers in your password?");

var specialChar = window.confirm("Would you like special characters in your password?")

break;
}

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
