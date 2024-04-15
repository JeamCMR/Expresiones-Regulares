/**VARIABLES */

const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help/i;


/**EVENTOS Y FUNCIONES */
//.match El metodo match se le pasa como argumento una expresion regular y indica si la cadena coincide con esta.
const isSpam = (msg) => msg.match(helpRegex);

checkMessageButton.addEventListener("click", ()=>{
    if (messageInput.value == "") {
       alert("Please enter a message");
        return;
    }
    result.textContent = isSpam(messageInput.value) ?  "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";
    messageInput.value = "";
});

