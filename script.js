// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordLength = 0;

let lowerCase = false;
let upperCase = false;
let number = false;
let specialCharacter = false;

let passwordArray = [];

const loweCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacterArray = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

//prompt for the length of the password stored in a variable
const lengthPrompt = function () {
  passwordLength = prompt(
    "Please enter your password length (must be between 8 and 128 characters)"
  );
};

//confirmation to include lowercase, uppercase, numeric and special characters stored in a boolean variable
const whatCharacters = function () {
  lowerCase = confirm("Would you like to include a lowercase character?");

  upperCase = confirm("Would you like to include an uppercase character?");

  number = confirm("Would you like to include a number?");

  specialCharacter = confirm("Would you like to include a special character?");
};

//function to push at least one random character of each selected character type into the final password array
const includeSelectedCharacterTypes = function () {
  if (lowerCase) {
    const arrayLength = loweCaseArray.length;
    const randomIndex = Math.floor(Math.random * arrayLength);
    passwordArray.push(loweCaseArray[randomIndex]);
    passwordLength -= 1;
  }
};

//function to concatenate arrays for selected characters and set loop length depending on how many characters were pushed already

//function to loop through concatenated character array and push random characters into password array

//function to join password array into a string

function generatePassword() {
  var password = "";
  lengthPrompt();

  //validation if the password length is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
  } else {
    whatCharacters();

    //validation if at least one character type was selected
    if (!lowerCase && !upperCase && !number && !specialCharacter) {
      alert("You must include at least one character type");
    } else {
      //continue password generating logic here
    }
  }

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
