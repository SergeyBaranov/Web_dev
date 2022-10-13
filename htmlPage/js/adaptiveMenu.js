document.querySelector(document).ready(function() {
    document.querySelector(".menu_burger").click(function(event) { //добавляю для дива адаптивного меню событие onclick
        document.querySelector("menu_burger", "left_nav").classList.toggle("active_menu"); //для адаптивного меню и lzk обычного меню добавляю переключатель класса (toggle)
    })
});