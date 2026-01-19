document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-switch');
    const htmlTag = document.documentElement;

    // Sugestão JS 2: Troca de cor de "Aura" conforme o idioma
    function updateAura(lang) {
        const color = lang === 'pt' ? '#ff4500' : '#00d4ff';
        document.documentElement.style.setProperty('--primary', color);
    }

    const savedLang = localStorage.getItem('language') || 'pt';
    htmlTag.setAttribute('lang', savedLang);
    updateAura(savedLang);
    langBtn.textContent = savedLang === 'pt' ? 'EN' : 'PT';

    langBtn.addEventListener('click', () => {
        const newLang = htmlTag.getAttribute('lang') === 'pt' ? 'en' : 'pt';
        htmlTag.setAttribute('lang', newLang);
        localStorage.setItem('language', newLang);
        updateAura(newLang);
        langBtn.textContent = newLang === 'pt' ? 'EN' : 'PT';
    });

    // Sugestão JS 1: Scroll Reveal (Efeito de surgimento)
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', reveal);
    reveal(); // Gatilho inicial
});