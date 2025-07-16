document.addEventListener("DOMContentLoaded", function() {
    // --- SEU CÓDIGO ORIGINAL PARA DESTACAR O MENU ATIVO ---
    var page = window.location.pathname.split("/").pop();
    var menuItems = document.querySelectorAll(".texto--menu");

    menuItems.forEach(function(item) {
        item.classList.remove("active");
    });

    menuItems.forEach(function(item) {
        var href = item.getAttribute("href");
        // Verifica se a página atual corresponde ao link OU se é a página inicial (index.html)
        if (href === page || (page === "" && href === "index.html")) {
            item.classList.add("active");
        }
    });

    // --- CÓDIGO PARA O MENU HAMBÚRGUER ---
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navMenu = document.querySelector(".menu");

    // Verifica se os elementos existem antes de tentar adicionar event listeners
    if (menuHamburger && navMenu) {
        menuHamburger.addEventListener("click", () => {
            menuHamburger.classList.toggle("active"); // Alterna a classe 'active' no botão para a animação do 'X'
            navMenu.classList.toggle("active");       // Alterna a classe 'active' no menu para mostrá-lo/escondê-lo
        });

        // Fechar o menu ao clicar em um item (opcional, mas melhora a experiência mobile)
        navMenu.querySelectorAll(".texto--menu").forEach(item => {
            item.addEventListener("click", () => {
                // Adiciona um pequeno atraso para permitir a navegação visual antes do fechamento
                setTimeout(() => {
                    menuHamburger.classList.remove("active"); // Remove a classe 'active' do botão
                    navMenu.classList.remove("active");       // Remove a classe 'active' do menu
                }, 100); 
            });
        });
    }
});