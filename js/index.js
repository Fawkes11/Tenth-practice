/* document.getElementById("message__alert").style.display = "none";
document.getElementById("icon__error").style.display ="none"; */

function validarcorreo(correo){
    var icon = document.getElementById("icon__error");
    var alert = document.getElementById("message__alert");
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expReg.test(correo);
    /* console.log(correo);
    console.log(icon.style.display,alert.style.display,valido); */
    if(correo === ""){
        icon.style.display = "none";
        alert.style.display ="none";
    }
    if(valido == true){
        icon.style.display = "none";
        alert.style.display ="none";
        
    }
    else{
        icon.style.display = "block";
        alert.style.display ="block";
    }
}