/* Il programma dovrà consentire di calcolare il prezzo del panino 
selezionando o deselezionando gli ingredienti proposti.
Consigli del giorno:
Create inizialmente un html base con gli elementi minimi necessari al funzionamento, 
passate poi alla parte JS ragionando come sempre a step. Prima la logica in italiano 
e poi traduciamo in codice. 
console.log() è nostro amico. Quando tutto funziona passate alla parte 
visiva lavorando al css. */

var ingredienti = document.querySelectorAll('input[type=checkbox]');
var prezzoBase = Number("5");
var elencoCodiciCoupon = ["000000", "111111", "222222", "333333", "444444"];

document.querySelector("button").addEventListener("click", function () {

    var codiceCouponUtente = document.getElementById("coupon_code").value;

    for (var i = 0; i < ingredienti.length; i++) {
        var ingrediente = ingredienti[i];
        var prezzoIngrediente = Number(ingrediente.getAttribute("data-price"));
        var ingredienteSelezionato = ingrediente.checked;

        if (ingredienteSelezionato == true) {
            var somma = prezzoBase += prezzoIngrediente
        } 
    }

    var scontoDaApplicare = somma * 0.2;

    for (var j = 0; j < elencoCodiciCoupon.length; j++) {

        if (codiceCouponUtente === elencoCodiciCoupon[j]) {
            var somma = somma - scontoDaApplicare
        }
    }

});

