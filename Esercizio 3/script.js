let campo = document.getElementById("nom")

function live() {
let copyCat = campo.value;
alert(copyCat);
};

campo.addEventListener("keyup", live);