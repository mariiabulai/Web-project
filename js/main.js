document.addEventListener('DOMContentLoaded', () => {
    // === 1. КЕРУВАННЯ ТЕМОЮ ===
    const body = document.body;
    const themeBtn = document.getElementById('theme-toggle-btn');

    // Перевірка при завантаженні
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    // Логіка кнопки
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            
            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
	
const mainContainer = document.getElementById('main-content');
    if (mainContainer) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Записуйтесь до нас!';
        newParagraph.style.marginTop = '20px';
        newParagraph.style.padding = '10px';
        newParagraph.style.fontStyle = 'italic';
        mainContainer.appendChild(newParagraph);
    }

    // === 2. ДИНАМІЧНА ДАТА ===
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = `Дата: ${today.toLocaleDateString('uk-UA', options)}`;
    }

    // === 3. АКОРДЕОН ===
    const showMoreBtn = document.getElementById('show-more-btn');
    const hiddenText = document.getElementById('hidden-text');
    if (showMoreBtn && hiddenText) {
        showMoreBtn.addEventListener('click', () => {
            hiddenText.classList.toggle('collapsed');
            showMoreBtn.textContent = hiddenText.classList.contains('collapsed') ? 'Показати більше' : 'Сховати';
        });
    }

    // === 4. ПІДСВІЧУВАННЯ МЕНЮ ===
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => link.classList.add('nav-hover'));
        link.addEventListener('mouseout', () => link.classList.remove('nav-hover'));
    });

    // === 5. ВАЛІДАЦІЯ ФОРМИ ===
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;
            const fields = contactForm.querySelectorAll('.js-validate');

            fields.forEach(field => {
                const value = field.value.trim();
                const errorEl = document.getElementById(`error-${field.id}`);
                field.style.border = '1px solid #ccc';
                if (errorEl) errorEl.textContent = '';

                if (field.id === 'name' && value.length < 3) {
                    if (errorEl) errorEl.textContent = "Мінімум 3 символи";
                    field.style.border = '2px solid red';
                    isValid = false;
                }
                if (field.id === 'email' && !value.includes('@')) {
                    if (errorEl) errorEl.textContent = "Некоректний Email";
                    field.style.border = '2px solid red';
                    isValid = false;
                }
                if (field.id === 'message' && value.length < 10) {
                    if (errorEl) errorEl.textContent = "Мінімум 10 символів";
                    field.style.border = '2px solid red';
                    isValid = false;
                }
            });

            if (isValid) {
                alert('Форма успішно надіслана!');
                contactForm.reset();
            }
        });
    }

    // === 6. ДОДАВАННЯ КОРИЧНЕВОЇ ТЕМИ (на випадок проблем з CSS) ===
    const style = document.createElement('style');
    style.textContent = `
        body.dark-theme {
            background-color: #3E2723 !important; /* Глибокий коричневий */
            color: #D7CCC8 !important;            /* Бежевий текст */
        }
        body.dark-theme header, body.dark-theme footer {
            background-color: #2D1B18 !important;
        }
        .nav-hover {
            background-color: #C6D6B1 !important; /* Салатовий при наведенні */
            color: #102E16 !important;
        }
        .collapsed {
            display: none;
        }
    `;
    document.head.appendChild(style);
});