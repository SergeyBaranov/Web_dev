function show() {
    let element_input = document.querySelector(".form_control_first");
    let data = element_input.value;

    let element_result = document.querySelector(".modal_main");
    element_result.innerHTML = data;

    //console.dir(data);

    let element_window = document.querySelector(".modal_view");
    element_window.classList.remove("hidden");
}

function hide() {
    let element_window = document.querySelector(".modal_view");
    element_window.classList.add("hidden");
}