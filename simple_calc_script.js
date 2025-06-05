function dodaj_do_input(wartosc_z_pola){
    let zapis_input = document.getElementById('wpis');
    zapis_input.value += wartosc_z_pola;
}

let Wartosc1 = 0;
let wynik = 0;
let pierwsze_czy_kolejne = 0;

let aktualna_operacja = '';

function wyborOpX(operacja){
    let zapis_wartosci = document.getElementById('wpis');
    Wartosc1 = zapis_wartosci.value;
    zapis_wartosci.value = '';
    aktualna_operacja = operacja;
    pierwsze_czy_kolejne = 0;
}

function RownaSie(){
    if(aktualna_operacja == 'dodawanie')
    {
        if(pierwsze_czy_kolejne == 0){
            let zapis_wartosc2 = document.getElementById('wpis');
            Wartosc2 = zapis_wartosc2.value;
            wynik = Number(Wartosc1) + Number(Wartosc2);
            zapis_wartosc2.value = wynik;
            console.log(wynik);
            pierwsze_czy_kolejne++;}
        else{
            wynik = Number(wynik) + Number(Wartosc2);
            document.getElementById('wpis').value = wynik;
            console.log(aktualna_operacja);
            }
    }
    if(aktualna_operacja == 'odejmowanie')
    {
        if(pierwsze_czy_kolejne == 0){
            let zapis_wartosc2 = document.getElementById('wpis');
            Wartosc2 = zapis_wartosc2.value;
            wynik = Number(Wartosc1) - Number(Wartosc2);
            zapis_wartosc2.value = wynik;
            console.log(wynik);
            pierwsze_czy_kolejne++;}
        else{
            wynik = Number(wynik) - Number(Wartosc2);
            document.getElementById('wpis').value = wynik;
            console.log(aktualna_operacja);
            }
    }
    if(aktualna_operacja == 'dzielenie')
    {
        if(pierwsze_czy_kolejne == 0){
            let zapis_wartosc2 = document.getElementById('wpis');
            Wartosc2 = zapis_wartosc2.value;
            wynik = Number(Wartosc1) / Number(Wartosc2);
            zapis_wartosc2.value = wynik;
            console.log(wynik);
            pierwsze_czy_kolejne++;}
        else{
            wynik = Number(wynik) / Number(Wartosc2);
            document.getElementById('wpis').value = wynik;
            console.log(aktualna_operacja);
            }
    }
    if(aktualna_operacja == 'mnozenie')
    {
        if(pierwsze_czy_kolejne == 0){
            let zapis_wartosc2 = document.getElementById('wpis');
            Wartosc2 = zapis_wartosc2.value;
            wynik = Number(Wartosc1) * Number(Wartosc2);
            zapis_wartosc2.value = wynik;
            console.log(wynik);
            pierwsze_czy_kolejne++;}
        else{
            wynik = Number(wynik) * Number(Wartosc2);
            document.getElementById('wpis').value = wynik;
            console.log(aktualna_operacja);
            }
    }
}

function ResetC(){
    aktualna_operacja = ''
    wynik = 0;
    Wartosc1 = 0;
    Wartosc2 = 0;
    pierwsze_czy_kolejne = 0;
    document.getElementById('wpis').value = '';
}