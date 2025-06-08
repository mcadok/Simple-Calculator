function dod_input(zaw_guzika){
    document.getElementById("mod1").value += zaw_guzika;
}

let aktualna_op = '';
let wynik = 0;
let o_ile_zmiana = 0;
let powtorzenia = 0;

function wybor_op(op_X){
        console.log(wynik);
        wynik = document.getElementById("mod1").value;
        document.getElementById("mod1").value = '';
        aktualna_op = op_X;
        powtorzenia = 0;
    }

function rowna_sie(){
    if(aktualna_op=='dod'){
        if(powtorzenia == 0){o_ile_zmiana = document.getElementById("mod1").value;}
        wynik = Number(wynik) + Number(o_ile_zmiana);
        document.getElementById("mod1").value = wynik;
        powtorzenia++;
    }
    if(aktualna_op=='ode'){
        if(powtorzenia == 0){o_ile_zmiana = document.getElementById("mod1").value;}
        wynik = Number(wynik) - Number(o_ile_zmiana);
        document.getElementById("mod1").value = wynik;
        powtorzenia++;
    }
    if(aktualna_op=='mno'){
        if(powtorzenia == 0){o_ile_zmiana = document.getElementById("mod1").value;}
        wynik = Number(wynik) * Number(o_ile_zmiana);
        document.getElementById("mod1").value = wynik;
        powtorzenia++;
    }
    if(aktualna_op=='dzi'){
        if(powtorzenia == 0){o_ile_zmiana = document.getElementById("mod1").value;}
        wynik = Number(wynik) / Number(o_ile_zmiana);
        document.getElementById("mod1").value = wynik;
        powtorzenia++;
    }
}

function reset_C(){
    aktualna_op = '';
    wynik = 0;
    o_ile_zmiana = 0;
    powtorzenia = 0;
    document.getElementById("mod1").value = '';
}
