/*Configurando botão do menu lateral*/

function exibirMenu() {
    const menu = document.querySelector('.listaItens');
    menu.classList.toggle('ativo');
}

function fecharMenu(event) {
    const menu = document.querySelector('.listaItens');
    const botaoExpandir = document.querySelector('.botaoExpandir');

    if (!menu.contains(event.target) && !botaoExpandir.contains(event.target)) {
        menu.classList.remove('ativo');
    } else {}
}

document.addEventListener('click', fecharMenu);


        /*Efeito maquina de escrever - PRINCIPAL*/

// Espera que o conteúdo da página seja carregado
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos a serem animados
    const tituloPrincipal = document.getElementById("tituloPrincipal");
    const paragrafoPrincipal = document.getElementById("paragrafoPrincipal");

    // Função para mostrar os elementos gradualmente
    function mostrarElementos() {
        tituloPrincipal.style.opacity = "1";
        tituloPrincipal.style.transform = "translateY(0)";
        paragrafoPrincipal.style.opacity = "1";
        paragrafoPrincipal.style.transform = "translateY(0)";
    }

    // Chama a função para mostrar os elementos após um pequeno intervalo
    setTimeout(mostrarElementos, 500);
});



        /*Efeito maquina de escrever - ABOUT ME*/


// Função para verificar se o elemento está na janela visível
function isInViewport(element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para mostrar o texto gradualmente ao rolar a página
function mostrarAoScrollar() {
    const aboutMeElement = document.getElementById("ABOUTME");
    if (isInViewport(aboutMeElement)) {
        aboutMeElement.style.opacity = "1";
        aboutMeElement.style.transform = "translateY(0)";
        // Remove o event listener para evitar que a animação se repita
        window.removeEventListener("scroll", mostrarAoScrollar);
    }
}

// Adiciona o event listener para chamar a função quando o usuário rolar a página
window.addEventListener("scroll", mostrarAoScrollar);






/* ALTERANDO BOTÃO E TEXTO DO FORMULARIO */
  const enviarBotao = document.getElementById('botaoFormulario');
  let nameFormulario = document.getElementById('name');
  let email = document.getElementById('email');
  let message =document.getElementById('message');

  enviarBotao.addEventListener('click', function (event) {

    const confirmacao = window.confirm('Deseja enviar o formulário?');

    if (confirmacao) {
      enviarBotao.classList.remove('botaoEnviar');
      enviarBotao.classList.add('botaoEnviado');
      enviarBotao.innerHTML = '<i class="bi bi-check-circle-fill"></i> Sent';

      setTimeout(function () {
        enviarBotao.classList.remove('botaoEnviado');
        enviarBotao.classList.add('botaoEnviar');

        nameFormulario.value='';
        email.value='';
        message.value='';

        enviarBotao.innerHTML = '<i class="bi bi-send-fill"></i> Send';

        enviarBotao.disabled = false;
      }, 3000);

      console.log(`FINALMENTE CONSEGUI '-'`)
    }
  });
