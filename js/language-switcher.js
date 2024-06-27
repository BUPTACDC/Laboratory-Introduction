document.addEventListener('DOMContentLoaded', function() {
    const switchLangButton = document.getElementById('switch-lang');

    switchLangButton.addEventListener('click', function() {
        const currentLang = document.documentElement.lang;

        if (currentLang === 'en') {
            document.documentElement.lang = 'zh';
            switchToChinese();
        } else {
            document.documentElement.lang = 'en';
            switchToEnglish();
        }
    });

    function switchToChinese() {
        document.querySelectorAll('[data-en]').forEach(element => {
            element.textContent = element.getAttribute('data-zh');
        });
    }

    function switchToEnglish() {
        document.querySelectorAll('[data-zh]').forEach(element => {
            element.textContent = element.getAttribute('data-en');
        });
    }
});
