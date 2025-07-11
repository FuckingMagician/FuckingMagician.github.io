document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-translate]');

    const setLanguage = (lang) => {
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        document.documentElement.lang = lang;

        localStorage.setItem('language', lang);
    };

    languageButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedLang = button.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        const browserLang = navigator.language.split('-')[0];
        setLanguage(browserLang === 'pt' ? 'pt' : 'en');
    }
});