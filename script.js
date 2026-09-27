/* ==========================================
   ABRIR O CONVITE
========================================== */

function abrirConvite() {

    const envelope =
        document.getElementById("tela-envelope");

    const convite =
        document.getElementById("tela-convite");


    if (!envelope || !convite) {
        return;
    }


    /* Evita clicar várias vezes */

    if (envelope.classList.contains("abrindo")) {
        return;
    }


    /* Começa a animação */

    envelope.classList.add("abrindo");


    /* Mostra o convite */

    setTimeout(function () {

        convite.classList.add("visivel");

    }, 400);


    /* Retira o envelope da tela */

    setTimeout(function () {

        envelope.classList.add("saindo");

    }, 900);
}
