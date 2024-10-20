const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function() {

    const password = this.value;
    const strengthIndicator  = document.querySelector("#password-strength-indicator"
        
    );

    const strengthText = document.querySelector("#password-strength-text");

    const strength = {
    0:"Muito fraca",
    1:"Fraca",
    2:"Moderada",
    3:"Forte",
    4:"Muito forte",
    };

    let score = 0;

    // Requisitos
    if (password.length >= 8) score++;

    // Calculo da % pq a largura vai ser %
    const width = (score / 4) * 100;

    strengthIndicator.style.width = `${width}%`;

    if (password.length > 0) {
    strengthText.innerHTML = `Força: ${strength[score]}`;
    }

});