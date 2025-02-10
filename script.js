document.addEventListener("DOMContentLoaded", function () {

    // === MENU RESPONSIVO ===
    const nav = document.querySelector("nav ul");
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "?";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("nav").appendChild(menuToggle);

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // === SCROLL SUAVE ===
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // === VALIDAÇÃO DO FORMULÁRIO ===
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let nome = document.querySelector("input[placeholder='Seu Nome']").value.trim();
        let email = document.querySelector("input[placeholder='Seu Email']").value.trim();
        let mensagem = document.querySelector("textarea[placeholder='Sua Mensagem']").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Por favor, insira um email válido!");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        this.reset();
    });

    // === EFEITO DE DIGITAÇÃO AUTOMÁTICA ===
    const typingText = document.querySelector(".hero h2");
    const textArray = ["Desenvolvedor Full Stack", "Especialista em APIs", "Entusiasta de Tecnologia"];
    let textIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < textArray[textIndex].length) {
            typingText.innerHTML = textArray[textIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 1500);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typingText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();

});
