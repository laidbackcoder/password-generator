const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let numChars = 25;
let includeSymbols = true;

function updatePasswordLengthElement() {
    document.getElementById("password-length").textContent = numChars;
}

function updateIncludeSymbolsElement() {
    document.getElementById("include-symbols").checked = includeSymbols;
}

function incrementLength() {
    numChars++;
    updatePasswordLengthElement();
}

function decrementLength() {
    if (numChars > 8) {
        numChars--;
    } else {
        numChars = 8;
    }

    updatePasswordLengthElement();
}

// Set initial values
updatePasswordLengthElement()
updateIncludeSymbolsElement()


// Handle Scroll Wheel Events on Password Length component
document.getElementById("length-widget").addEventListener("wheel", event => {
    if (Math.sign(event.deltaY) < 0) {
        incrementLength();
    } else {
        decrementLength();
    }
});

document.getElementById("length_plus").addEventListener("click", incrementLength);
document.getElementById("length_minus").addEventListener("click", decrementLength);

document.getElementById("include-symbols").addEventListener("change", () => {
    includeSymbols = document.getElementById("include-symbols").checked;
})

document.getElementById("generate-btn").addEventListener("click", () => {
    let maxCharacterPosition = includeSymbols ? characters.length : characters.length - 30;
    let password = "";

    for (let i=0; i < numChars; i++){
        password += characters[Math.floor(Math.random() * maxCharacterPosition)];
    }

    document.getElementById("password").textContent = password;
})

document.getElementById("password").addEventListener("click", () => {
    let password = document.getElementById("password").textContent;
    let notification = document.getElementById("notification");

    if (password != "") {
        navigator.clipboard.writeText(password);

        // Display Notification
        if (notification.style.display != "block") {
            notification.style.display = "block";
            setTimeout(() => {
                notification.style.animation = "notification-out 1s ease";
                setTimeout(() => {
                    notification.style.display = "none";
                    notification.style.animation = "notification-in 1s ease";
                }, 950)
            }, 4000)
       }
    }
})
