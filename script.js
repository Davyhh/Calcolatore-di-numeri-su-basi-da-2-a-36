
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
        let risultato= document.getElementById("risultato");
        risultato.style.display = "block";

        
    }   
}

let obj={
    base:0,
    numero:0
}