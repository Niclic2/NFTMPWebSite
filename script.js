// Получаем ссылки на элементы
// Убедимся, что DOM полностью загружен, прежде чем пытаться получить элементы
document.addEventListener('DOMContentLoaded', () => {
    // Элементы для анимации cat-card
    const buyNftButton = document.getElementById('buyNftButton');
    const catCard = document.getElementById('catCard');

    // Элементы для анимации Спанчбоба
    const galleryButton = document.getElementById('galleryButton'); // Получаем кнопку "Галерея"
    const spongebobImage = document.querySelector('.spongebob-image'); // Получаем Спанчбоба по классу

    // --- Логика для cat-card ---
    if (buyNftButton && catCard) {
        buyNftButton.addEventListener('mouseenter', () => {
            catCard.classList.add('enlarged');
        });
        buyNftButton.addEventListener('mouseleave', () => {
            catCard.classList.remove('enlarged');
        });
    } else {
        console.warn("Не удалось найти один или оба элемента: #buyNftButton, #catCard. Проверьте ID в HTML.");
    }

    // --- Логика для Спанчбоба ---
    if (galleryButton && spongebobImage) {
        galleryButton.addEventListener('mouseenter', () => {
            spongebobImage.classList.add('active'); // Добавляем класс 'active' для выезда
        });
        galleryButton.addEventListener('mouseleave', () => {
            spongebobImage.classList.remove('active'); // Удаляем класс 'active' для скрытия
        });
    } else {
        console.warn("Не удалось найти один или оба элемента: #galleryButton, .spongebob-image. Проверьте ID/класс в HTML.");
    }
});