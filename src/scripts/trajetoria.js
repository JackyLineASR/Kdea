document.addEventListener('DOMContentLoaded', function () {
    const options = {
        root: null, // A janela de visualização
        threshold: 0.5, // Quando 50% do elemento estiver visível
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando o card entra na visualização, adiciona a classe para a animação
                entry.target.classList.add('animate-border');
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, options);

    // Seleciona todos os cards de trajetoria
    const trajetoriaCards = document.querySelectorAll('.trajetoria-card');

    trajetoriaCards.forEach(card => {
        observer.observe(card); // Inicia a observação para cada card
    });
});
