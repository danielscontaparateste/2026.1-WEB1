function iniciar(){
    // alert("OI");

    var valor = document.getElementById("iptQtd").value;

    valor = parseInt(valor);

    // var spnRes = document.getElementById("spnRes");

    spnRes = document.createElement("span");

    spnRes.style.display = "flex";
    spnRes.style.border = "1px solid black";
    spnRes.style.width = "30px";
    spnRes.style.height = "30px";
    spnRes.style.alignItems = "center";
    spnRes.style.justifyContent = "center";

    spnRes.innerHTML = valor;

    document.getElementById("principal").appendChild(spnRes);


}


function verificar(){
    var valor = parseInt(document.getElementById("iptQtd").value);
    // var valor = document.getElementById("iptQtd").value;
    

    var spnNumber = document.querySelector("#spnNumber");
    if (!(isNaN(valor))){
        if (valor % 2 == 0){
            spnNumber.textContent = valor + " é PAR";
        }else{
            spnNumber.textContent = valor + " é IMPAR";
        }
    }else{
        spnNumber.textContent = "";
    }
    
    // spnNumber.innerHTML = valor;
    
}