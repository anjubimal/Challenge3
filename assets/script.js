// Assignment code here

function generatePassword() {
    var password_generated = [];


    var upper_case = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lower_case = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var special_characters = ["!", "#", "$", "%", "&"];

    // var upper = prompt("Include uppercase, yes or no?");
    //verify length
    function confirmLength() {
    var length = prompt("Password length should be at least 8 characters and no more than 128 characters. Choose length.");
    if (length > 7 && length < 129) {
        passwordLength = parseInt(length);
    } else {
        confirm("Incorrect Length")
        confirmLength();
    }
}

    confirmLength();
    var lower = prompt("Include lowercase, yes or no?");
    var numeric = prompt("Include numeric characters, yes or no?");
    var special = prompt("Include special characters, yes or no?");


    let charCodes = upper_case
    if (lower === "yes") charCodes = charCodes.concat(lower_case);
    if (numeric === "yes") charCodes = charCodes.concat(numbers);
    if (special === "yes") charCodes = charCodes.concat(special_characters);


    console.log(charCodes);

    for (i = 0; i < passwordLength; i++) {
        var character = charCodes[Math.floor(Math.random() * charCodes.length)]
        password_generated.push(character)

    }

    //remove 
    password_generated = password_generated.join("");
    return password_generated;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
