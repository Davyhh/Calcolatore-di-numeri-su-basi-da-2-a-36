

function acquisisciValore(obj){
    let input = document.querySelector("input");
    if(input.classList.length==0){
        obj.base = input.value;
        input.classList.add("basepresa");
        document.querySelector("input").value= null;
        document.getElementById("richiesta").innerHTML= "Inserisci un numero:";
    }
    else{
        obj.numero= input.value;
        let ris = calcolo(obj.base,obj.numero);
        let risultato= document.getElementById("risultato");
        risultato.innerHTML = "Risultato: ";
        for(let i=0; i<ris.length;i++)
            risultato.innerHTML += ris[i];
        risultato.style.display = "block";
        
        

        
    }   
}

let obj={
    base:0,
    numero:0
}


function calcolo(base,numero){
    let ris= [];
    let i=0;
    if(base<11){
        while(numero>0){
            ris[i] = numero%base;
            numero = parseInt(numero/base);
            i++;
        }
    }
    else{
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