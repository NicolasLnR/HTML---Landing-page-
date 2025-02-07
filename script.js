// script.js

// Função para animação suave ao rolar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode adicionar lógica para enviar os dados do formulário via AJAX ou outra abordagem

    alert('Mensagem enviada com sucesso!'); // Mensagem de sucesso
});
