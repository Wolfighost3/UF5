function enviarSalutacio() {
    var nom = document.querySelector("#nom").value;
    var cognom = document.querySelector("#cognom").value;

    var salutacio = document.getElementById("salutacio");
    salutacio.innerHTML = `
      <p>HOLA ${nom} ${cognom}, GRÀCIES PER OMPLIR EL FORMULARI </p>
    `;
}