function carregarAnimes() {

    let objetosAnimes = [
        {

            foto: "komisan.jpg",
            nome: "Komi San"

        },
        {
            foto: "horimiya.jpg",
            nome: "Horimiya"

        },
        {
            foto: "jujutsu.jpg",
            nome: "Jujutsu Kaisen"
        }
    ];


    let listaAnimes = document.querySelector(".lista-animes");
    let cartao = "";
    for (let i = 0; i < objetosAnimes.length; i++) {

        cartao += "<div class='cartao'>";
        cartao += "<img src='img/" + objetosAnimes[i].foto + "'>";
        cartao += objetosAnimes[i].nome;
        cartao += "</div>";
    }

    listaAnimes.innerHTML = cartao;

}

window, onload = function () {

    carregarAnimes();

}