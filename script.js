// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordLength;

//prompt for the length of the password stored in a variable
const lengthPrompt = function () {
  passwordLength = prompt(
    "Please enter your password length (must be between 8 and 128 characters)"
  );
};

//validation if the password length is between 8 and 128 characters

//confirmation to include lowercase, uppercase, numeric and special characters stored in a boolean variable

//validation if at least one character type was selected

//function to push at least one random character of each selected character type into the final password array

//function to concatenate arrays for selected characters and set loop length depending on how many characters were pushed already

//function to loop through concatenated character array and push random characters into password array

//function to join password array into a string

function generatePassword() {
  var password = "";
  lengthPrompt();

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
