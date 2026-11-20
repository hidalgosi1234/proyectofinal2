const mal = document.querySelectorAll(".falso");
const bien = document.querySelectorAll(".verdadero");
const siii = document.getElementById("otra");
siii.disabled = true;
const totalVerdaderos = bien.length; 
let aciertos = 0;
mal.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("la respuesta es incorrecta, vuelve a intertarlo");
        siii.disabled = true;
    });
});

bien.forEach(function(button) {
    button.addEventListener("click", function() {
        if (this.disabled) return;
        this.disabled = true;
        aciertos++;
        alert("la respuesta es correcta, felicidades");
       
        if (aciertos === totalVerdaderos) {
            alert("respondiste todo corecctamente, puedes continuar");
            siii.disabled = false;
        }
    });
});