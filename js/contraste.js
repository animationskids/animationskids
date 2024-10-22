document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('contrast-toggle');
    
        // Verificar se o modo escuro está ativado nas preferências do usuário
        if (localStorage.getItem('dark-mode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }
    
        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
    
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'enabled');
                document.body.style.color = '#ffcc00';
            } else {
                localStorage.setItem('dark-mode', 'disabled');
                document.body.style.color = '#ff6600';
            }
        });
    });
    