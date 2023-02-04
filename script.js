
//Funzione main, richiamata sul click del tasto "Invia"
function main(obj){
    let input = document.querySelector("input"); //barra di input
    let richiesta = document.getElementById("richiesta"); //scritta input
    if((input.value < 2 || input.value > 36) && input.value!=null && !obj.basepresa ){ //verifica input base
        input.value = null;
        input.style.border = "2px solid red";
        input.style.borderRadius = "5px";
        input.placeholder = "Il numero deve essere compreso tra 2 e 36!";
    }
    else if(!obj.basepresa){ // input base
        obj.base = input.value;
        obj.basepresa=true;
        document.querySelector("input").value= null;
        richiesta.innerHTML= "Inserisci un numero:";
    }
    else if(input.value<0 && obj.basepresa){
        input.value = null;
        input.style.border = "2px solid red";
        input.style.borderRadius = "5px";
        input.placeholder = "Non sono contemplati i numeri negativi!";
    }
    else if(input.value=="" && obj.basepresa){
        input.value = null;
        input.style.border = "2px solid red";
        input.style.borderRadius = "5px";
        input.placeholder = "Inserisci un numero, non puoi lasciar vuoto!";
    }
    else{ //input numero + calcolo e stampa risultato
        obj.numero= input.value;
        let ris = calcolo(obj.base,obj.numero);
        let risultato= document.getElementById("risultato");
        risultato.innerHTML = "Risultato: ";
        for(let i=0; i<ris.length;i++)
            risultato.innerHTML += ris[i];
        let button = document.querySelector("button");
        let back = document.getElementById("back");

        risultato.style.display = "block"; 
        button.style.display = "none";
        input.style.display = "none";
        richiesta.style.display="none";
        back.style.display="block";
    
    }  
}

let obj={
    base:0,
    numero:0,
    basepresa:false
}


function calcolo(base,numero){
    let ris= [];
    let i=0;
    
    if(numero==0){
        ris[0]=0;
    }
    else if(base<11){ //numero con cifre classiche
        while(numero>0){
            ris[i] = numero%base;
            numero = parseInt(numero/base);
            i++;
        }
    }
    else{ // numero con cifre letterali
        let lettere = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
        "L", "M" ,"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        while(numero>0){
            if(numero%base>9)
                ris[i] = lettere[numero%base-10];
            else
                ris[i] = String(numero%base);
            numero = parseInt(numero/base);
            i++;
        }
    }
    ris = ris.reverse();
    return ris;
    
}
//impedisco refresh della pagina su invio
window.addEventListener('keydown', function (event) {

    if (event.keyCode == 13) {
        event.preventDefault();

        return false;
    }

});

//reset condizioni iniziali dell'input dopo errore nell'inserimento della base
function azzera(){
    let input = document.querySelector("input");
    input.style.border = "2px solid black";
    input.placeholder = "";
}