document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const heroSection = document.querySelector(".hero");
    const projetos = document.querySelectorAll(".projeto");
    const form = document.querySelector("form");

    // Suavizar a rolagem ao clicar nos links do menu
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animação ao carregar a seção Hero
    heroSection.style.opacity = "0";
    heroSection.style.transform = "translateY(-30px)";

    setTimeout(() => {
        heroSection.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
        heroSection.style.opacity = "1";
        heroSection.style.transform = "translateY(0)";
    }, 500);

    // Efeito hover nos projetos
    projetos.forEach(projeto => {
        projeto.addEventListener("mouseover", () => {
            projeto.style.transform = "scale(1.05)";
            projeto.style.transition = "transform 0.3s ease-in-out";
        });

        projeto.addEventListener("mouseleave", () => {
            projeto.style.transform = "scale(1)";
        });
    });

    // Validação do formulário de contato
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.querySelector("input[type='text']");
        const email = document.querySelector("input[type='email']");
        const mensagem = document.querySelector("textarea");

        if (nome.value.trim() === "" || email.value.trim() === "" || mensagem.value.trim() === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();
    });
});
