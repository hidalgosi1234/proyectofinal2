
const mal = document.querySelectorAll(".falso");
const bien = document.querySelectorAll(".verdadero");
const siii = document.getElementById("otra");
siii.disabled = true;
const totalVerdaderos = bien.length; 
let aciertos = 0;
mal.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("estas mal hijo,vuelve a intentarlo");
        siii.disabled = true;
    });
});

bien.forEach(function(button) {
    button.addEventListener("click", function() {
        if (this.disabled) return;
        this.disabled = true;
        aciertos++;
        alert("Esta bien aprobaste uwu likeeeee guapooo ganadorrr ");
       
        if (aciertos === totalVerdaderos) {
            alert("y respondiste todo bien uwuuu");
            siii.disabled = false;
        }
    });
});
