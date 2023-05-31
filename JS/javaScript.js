
function caracVali(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "qazwsxedcrfvtgbyhnujmikolp1234567890";

    especiales = [8, 13, 32];
    tecla_especial = false;
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        alert("Esta ingresando caracteres invalidos" + "\n" + "solo minúsculas y números");
        return false;
    }


}

function encriptar() {

    var element = (document.getElementById("text").value);
    if (element == "") {
        alert("No ha ingresado nada")
    }

    var newText = [];
    var resulText = "";
    for (var i = 0; i < element.length; i++) {

        if (element.charAt(i) == 'e') { newText.push("enter"); }
        if (element.charAt(i) == 'i') { newText.push("imes"); }
        if (element.charAt(i) == 'a') { newText.push("ai"); }
        if (element.charAt(i) == 'o') { newText.push("ober"); }
        if (element.charAt(i) == 'u') { newText.push("ufat"); }
        if (element.charAt(i) != 'e' && element.charAt(i) != 'i' && element.charAt(i) != 'a' && element.charAt(i) != 'o' && element.charAt(i) != 'u') {
            newText.push(element.charAt(i));
        }
    }


    var text = newText.toString();
    //quitarle las comas al string
    for (var i = 0; i < text.length; i++) {

        if (text.charAt(i) == ',') { resulText = resulText + "" }
        else {
            resulText = resulText + text.charAt(i);
        }
    }

    document.getElementsByClassName("result")[0].innerHTML = resulText;



    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"


}

function desencriptar() {

    var element = (document.getElementById("text").value);
    if (element == "") {
        alert("No ha ingresado nada")
    }


    var newText = [];
    var resulText = "";
    var i = 0;
    var a = false;
    var e = false;
    var ii = false;
    var o = false;
    var u = false;
    while (i < element.length) {
        //fenterlimespenter
        //1,12.18
        //feie

        if (element.slice(i, i + 5) == "enter") { newText.push("e"); e = true; i = i + 6 }

        alert("No " + i);
        if (element.slice(i, i + 4) == "imes") {
            newText.push('i'); ii = true; i = i + 5
            alert("ingreso en la i")
        }
        if (element.slice(i, i + 2) == "ai") {
            newText.push('a'); a = true; i = i + 3
            /// verificar que no entre en los otros if !! pues el resultado de abajo si da
            // es la substring que esta mal 
        }
        if (element.slice(i, i + 4) == "ober") { newText.push('o'); o = true; i = i + 5 }
        if (element.slice(i, i + 4) == "ufat") { newText.push('u'); u = true; i = i + 5 }
        if (a == false && e == false && ii == false && o == false && u == false) {
            newText.push(element.charAt(i));
            i = i + 1;

        }

        alert(i);
        console.log(newText);

    }


    var text = newText.toString();
    //quitarle las comas al string
    for (var i = 0; i < text.length; i++) {

        if (text.charAt(i) == ',') { resulText = resulText + "" }
        else {
            resulText = resulText + text.charAt(i);
        }
    }

    document.getElementsByClassName("result")[0].innerHTML = resulText;

}