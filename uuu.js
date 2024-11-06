
    function setActive(element) {
        // Получаем все элементы меню
        var menuItems = document.querySelectorAll('.menu-item');
        
        // Убираем класс active у всех элементов
        menuItems.forEach(function(item) {
            item.classList.remove('active');
        });
        
        // Добавляем класс active к текущему элементу
        element.classList.add('active');
    }
    document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop();
    var menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function(item) {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add('active');
        }
    });
});

   