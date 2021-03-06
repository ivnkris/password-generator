// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordLength = 0;

let lowerCase = false;
let upperCase = false;
let number = false;
let specialCharacter = false;

let concatenatedArray = [];

let passwordArray = [];

const lowerCaseArray = [
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

/**
 * @description prompt for the length of the password stored in a variable
 * @returns variable length of the password
 */
const lengthPrompt = () => {
  passwordLength = prompt(
    "Please enter your password length (must be between 8 and 128 characters)"
  );
  passwordLength = parseInt(passwordLength);
};

/**
 * @description confirmation to include lowercase, uppercase, numeric and special characters stored in a boolean variable
 * @returns boolean variables of each character type
 */
const whatCharacters = () => {
  lowerCase = confirm("Would you like to include a lowercase character?");

  upperCase = confirm("Would you like to include an uppercase character?");

  number = confirm("Would you like to include a number?");

  specialCharacter = confirm("Would you like to include a special character?");
};

/**
 * @description function to push at least one random character of each selected character type into the final password array and set loop length depending on how many characters were pushed
 * @returns array with one of each of the selected character types
 */
const includeSelectedCharacterTypes = () => {
  if (lowerCase) {
    const arrayLength = lowerCaseArray.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    passwordArray.push(lowerCaseArray[randomIndex]);
    passwordLength -= 1;
  }

  if (upperCase) {
    const arrayLength = upperCaseArray.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    passwordArray.push(upperCaseArray[randomIndex]);
    passwordLength -= 1;
  }

  if (number) {
    const arrayLength = numberArray.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    passwordArray.push(numberArray[randomIndex]);
    passwordLength -= 1;
  }

  if (specialCharacter) {
    const arrayLength = specialCharacterArray.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    passwordArray.push(specialCharacterArray[randomIndex]);
    passwordLength -= 1;
  }
};

/**
 * @description function to concatenate arrays for selected characters
 * @returns concatenated array
 */
const concatenateArrays = () => {
  if (lowerCase) {
    concatenatedArray = concatenatedArray.concat(lowerCaseArray);
  }

  if (upperCase) {
    concatenatedArray = concatenatedArray.concat(upperCaseArray);
  }

  if (number) {
    concatenatedArray = concatenatedArray.concat(numberArray);
  }

  if (specialCharacter) {
    concatenatedArray = concatenatedArray.concat(specialCharacterArray);
  }
};

/**
 * @description function to loop through password length and push random characters from concatenated array into password array
 * @returns password array
 */
const fillPasswordArray = () => {
  for (let i = 0; i < passwordLength; i++) {
    const arrayLength = concatenatedArray.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    passwordArray.push(concatenatedArray[randomIndex]);
  }
};

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
      includeSelectedCharacterTypes();
      concatenateArrays();
      fillPasswordArray();

      //join password array into a string
      password = passwordArray.join("");
    }
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //variables re-set to make the generator re-usable
  passwordLength = 0;
  lowerCase = false;
  upperCase = false;
  number = false;
  specialCharacter = false;
  concatenatedArray = [];
  passwordArray = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
