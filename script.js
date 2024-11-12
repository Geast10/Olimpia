        // JavaScript para o Tema Claro/Escuro
        const toggleThemeButton = document.getElementById('toggleTheme');
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            toggleThemeButton.textContent = isDark ? 'Tema Claro' : 'Tema Escuro';
        });

        // CSS do Tema Escuro
        const style = document.createElement('style');
        style.textContent = `
            .dark-theme {
                background-color: #333;
                color: #f3f3f3;
            }
            .dark-theme header {
                background-color: #222;
            }
            .dark-theme nav {
                background-color: #333;
            }
            .dark-theme footer {
                background-color: #222;
            }
            .dark-theme section {
                background-color: #444;
            }
        `;
        document.head.appendChild(style);

        // JavaScript para o Botão "Voltar ao Topo"
        const backToTopButton = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // JavaScript para Rolagem Suave ao Clicar no Menu
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
