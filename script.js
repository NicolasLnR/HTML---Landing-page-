// script.js

// Fun��o para anima��o suave ao rolar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Valida��o do formul�rio de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padr�o do formul�rio

    // Aqui voc� pode adicionar l�gica para enviar os dados do formul�rio via AJAX ou outra abordagem

    alert('Mensagem enviada com sucesso!'); // Mensagem de sucesso
});
