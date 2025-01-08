const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let numChars = 25;
let includeSymbols = true;

document.getElementById("password-length-em").value = numChars;
document.getElementById("include-symbols-em").checked = includeSymbols;

function updateLength() {
    numChars = document.getElementById("password-length-em").value;
}

function updateIncludeSymbols() {
    includeSymbols = document.getElementById("include-symbols-em").checked;
}

function generatePassword() {
    let maxCharacterPosition = includeSymbols ? characters.length : characters.length - 30;
    let password = "";

    for (let i=0; i < numChars; i++){
        password += characters[Math.floor(Math.random() * maxCharacterPosition)];
    }

    document.getElementById("password-em").textContent = password;
}

function copyPasswordToClipboard() {
    let password = document.getElementById("password-em").textContent;
    let notificationEm = document.getElementById("notification-em");

    if (password != "") {
        navigator.clipboard.writeText(password);
        notificationEm.style.display = "block";

        setTimeout(() => {
            notificationEm.style.animation = "notification-out 1s ease";
            setTimeout(() => {
                notificationEm.style.display = "none";
                notificationEm.style.animation = "notification-in 1s ease";
            }, 1000)
        }, 4000)
    }
}
