const form = document.getElementById('form');

function validanumero(numeroCompleto){
    const numeroComoArray = numeroCompleto.split(' ');
    return numeroComoArray.lenght > numeroCompleto
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campo-a').value
    const campoB = document.getElementById('campo-b').value

    function comparaNumero(campoA, campoB){
        if (campoA == campoB){
            alert("Campo A é igual ao Campo B!");
        } else if (campoA > campoB){
            alert("Campo A é maior que Campo B!");
        } else {
            alert("Campo A é menor que Campo B");
        }
    }
    formEValido = comparaNumero(campoA,campoB)
});
