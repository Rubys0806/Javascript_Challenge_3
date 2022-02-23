// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Creates strings of acceptable characters based on their different criteria. 
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

// Generate password function
function generatePassword() {
  
  window.alert("Please choose the criteria you wish to include in your password.");

// Creates a loop that will run until it returns a string back
while (true) { 

// Creates empty variables for the new generated password and the selected acceptable characters.
  newPassword = '';
  selectedChar = '';

  // Asks user for desired length of password.
  var passwordLength = window.prompt("How many characters would you like your password to be? (Password must be between 8-128 characters.)");
  
  // User is able to hit cancel to return to the webpage. 
  if (passwordLength === null) {
    var error = "Try again."
    return error;
  }
  // Turns password length from a string to an integer. 
  passwordLengthInteger= parseInt(passwordLength);

// If the password length is not between 8-128 or not a number the user will receive an error message and be prompted to chose the desired length again.  
  if(passwordLengthInteger < 8 || passwordLengthInteger > 128 || isNaN(passwordLengthInteger)){
    window.alert("Please choose a valid password length between 8-128 characters.");
    continue;
  }

// Asks if the user would like lowercase letters. 
var lowercase = window.confirm("Would you like lowercase letters in your password?");
if (lowercase) {
  selectedChar += lowercaseChar
}

// Asks if the user would like upper case letters. 
var uppercase = window.confirm("Would you like uppercase letters in your password?");
if (uppercase) {
  selectedChar += uppercaseChar
}

// Asks if the user would like numbers. 
var numeric = window.confirm("Would you like numbers in your password?");
if (numeric) {
  selectedChar += numericChar
}

// Asks if the user would like special characters. 
var special = window.confirm("Would you like special characters in your password?")
if (special) {
  selectedChar += specialChar
}

// If at least one criteria is chosen then it will generate a random password; otherwise, the loop will begin again. 
if (lowercase === true || uppercase === true || numeric === true || special === true) {
 for(var i=0; i<passwordLengthInteger; i++)
 {
   newPassword += selectedChar[Math.floor(Math.random() * selectedChar.length)];
 }
 return newPassword;
}

else {
  window.alert("You need to choose at least one criteria to meet for your password.")
  continue; 
    }
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
