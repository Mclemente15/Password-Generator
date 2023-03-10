// Define variables
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const passwordField = document.getElementById("password");
const generateButton = document.getElementById("generate");

// Add event listener to the generate button
generateButton.addEventListener("click", () => {
  let passwordLength = prompt("Enter password length (between 8 and 128 characters)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must contain at leat 8 characters and no more than 128 characters");
    return;
  }
  // After user inputs valid password length it will confirm characters
  let useLowerCase = confirm("Do you want to include lowercase characters?");
  let useUpperCase = confirm("Do you want to include uppercase characters?");
  let useNumbers = confirm("Do you want to include numeric characters?");
  let useSymbols = confirm("Do you want to include special characters?");
  
  if (!useLowerCase && !useUpperCase && !useNumbers && !useSymbols) {
    alert("At least one character type must be selected");
    return;
  }
  
  let passwordChars = "";
  if (useLowerCase) passwordChars += lowerCase;
  if (useUpperCase) passwordChars += upperCase;
  if (useNumbers) passwordChars += numbers;
  if (useSymbols) passwordChars += symbols;
  
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars[randomIndex];
  }
  
  passwordField.value = password;
});
