// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

// Generate password function
function generatePassword() {
   window.alert("Please choose the criteria you wish to include in your password.");
while (true) { 
  newPassword = '';
  selectedChar = '';

  var passwordLength = window.prompt("How many characters would you like your password to be? (Password must be between 8-128 characters.)");
  if (passwordLength === null) {
    break;
  }
  passwordLengthInteger= parseInt(passwordLength);
  if(passwordLengthInteger < 8 || passwordLengthInteger > 128 || isNaN(passwordLengthInteger)){
    window.alert("Please choose a valid password length between 8-128 characters.");
    continue;
  }
var lowercase = window.confirm("Would you like lowercase letters in your password?");
if (lowercase) {
  selectedChar += lowercaseChar
}

var uppercase = window.confirm("Would you like uppercase letters in your password?");
if (uppercase) {
  selectedChar += uppercaseChar
}

var numeric = window.confirm("Would you like numbers in your password?");
if (numeric) {
  selectedChar += numericChar
}

var special = window.confirm("Would you like special characters in your password?")
if (special) {
  selectedChar += specialChar
}

if (lowercase === true || uppercase === true || numeric === true || special === true) {

}

else {
  window.alert("You need to choose at least one criteria to meet for your password.")
  continue; 
}


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
