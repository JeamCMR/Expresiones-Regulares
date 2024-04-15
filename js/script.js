/**VARIABLES */

const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

/**Expresiones regulares ha evaluar */
const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i  // el simbolo + indica que puede haber 1 o mas simbolos , el simbolo ? indica que es opcional
const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i  //\s indica espacios o saltos de lineas el simbolo (es aagrupacion), e simbolo ^ siginifica al comienzo y el simbolo $ es al final
const stockRegex  = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;
const denyList = [helpRegex,dollarRegex,freeRegex,stockRegex,dearRegex];

/**EVENTOS Y FUNCIONES */
//.match El metodo match se le pasa como argumento una expresion regular y indica si la cadena coincide con esta.
const isSpam = (msg) => denyList.some(regex => regex.test(msg));

checkMessageButton.addEventListener("click", ()=>{
    if (messageInput.value == "") {
       alert("Please enter a message");
        return;
    }
    result.textContent = isSpam(messageInput.value) ?  "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";
    messageInput.value = "";
});

