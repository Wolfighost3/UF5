var contingut = document.querySelector("#contingut");
function agafar() {
    fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results["0"]);
            contingut.innerHTML = `
<img src="${data.results["0"].picture.large}"
width="100px" class="img-fluid rounded-circle">
`;
        });
        //Pongo getitem en porque si pongo setItem no se ve nada
}