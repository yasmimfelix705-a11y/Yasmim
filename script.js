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


/* ==========================================
   VOLTAR DA LISTA DIRETAMENTE PARA O CONVITE
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const parametros =
        new URLSearchParams(window.location.search);

    const voltarParaConvite =
        parametros.get("convite") === "aberto";


    if (voltarParaConvite) {

        const envelopeTela =
            document.getElementById("tela-envelope");

        const conviteTela =
            document.getElementById("tela-convite");


        /* Esconde completamente o envelope */

        if (envelopeTela) {

            envelopeTela.style.display = "none";
        }


        /* Mostra diretamente o convite */

        if (conviteTela) {

            conviteTela.classList.add("visivel");

            conviteTela.style.display = "flex";
        }

    }

});
