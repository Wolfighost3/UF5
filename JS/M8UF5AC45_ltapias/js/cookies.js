function validar() {
    var Usuari = document.form.login.value;
    var a = document.form.a.value;
    var b = document.form.b.value;
    if (a == b) {
        alert("Concideix");
    } else {
        alert("No coincideix");
    }
}
function guardar() {
    localStorage.setItem ("nombre", document.querySelector("#nombre").value);
    localStorage.setItem ("apellido", document.querySelector("#apellido").value);
    }
    
    function recuperar() {
    document.querySelector("#nombre").value = localStorage.getItem("nombre");
    document.querySelector("#apellido").value = localStorage.getItem("apellido");
    }
    
    function esborrar() {
    document.querySelector("#nombre").value = null;
    document.querySelector("#apellido").value = null;
    localStorage.setItem ("nombre", "");
    localStorage.setItem ("apellido", "");
    }

    function resultat() {
        document.getElementById("colum1")
        document.getElementById("colum2")
        localStorage.setItem("colum1","");
        localStorage.setItem("colum2","");
    }