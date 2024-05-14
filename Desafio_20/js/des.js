function nota (){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let n3 = parseInt(document.getElementById('n3').value);

    let notafinal = (n1 + n2 + n3) / 3;
 


    if (notafinal >= 6){
        alert('Parabéns, você foi aprovado!');
    } else {
        alert('Que pena, você não atingiu a nota mínima.');
    }

    document.getElementById("resp").innerHTML = text;
}
