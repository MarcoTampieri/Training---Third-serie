let bottone = document.querySelector("button");
let fields = document.querySelectorAll("input");

function reset() {
 for (i = 0; i < fields.length; i++){
     fields[i].value = "";
 };
}

bottone.addEventListener("click", reset)