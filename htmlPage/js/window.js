
// работа с калькулятором
function calculate() {
    let number1 = parseInt(document.getElementById("numberInput").value);
    let number2 = parseInt(document.getElementById("numberInput2").value);
    let result = 0;
    let sign = document.getElementById("selectInput").value;
    //console.log(number1, number2, sign);

    switch(sign) {
        default:
            result = "Выберите операцию";
            break;
        case("plus"):
            result = number1 + number2;
            break;
        case("minus"):
            result = number1 - number2;
            break;
        case("multiplication"):
            result = number1 * number2;
            break; 
        case("division"):
            result = number1 / number2;
            break;    
    }
    document.getElementById("get_result").innerHTML = result;
}


// показываем модальное окно
function show() {
    let element_window = document.querySelector(".modal_view"); // показываем модальное окно
        element_window.classList.remove("hidden");

    let element_result = document.querySelector(".modal_main");
        element_result.innerHTML = data;

    document.getElementById("get_result").innerHTML = result;
}


//закрываем модальное окно
function hide() {
    let element_window = document.querySelector(".modal_view");
    element_window.classList.add("hidden");
}


/* function show() {
    let element_input = document.querySelector(".form_control_first");
    
    let data = element_input.value;

    if (data) {
        let element_result = document.querySelector(".modal_main");
        element_result.innerHTML = data;

        //console.dir(data);

        let element_window = document.querySelector(".modal_view");
        element_window.classList.remove("hidden");
    }
    
   
}

function hide() {
    let element_window = document.querySelector(".modal_view");
    element_window.classList.add("hidden");
}*/