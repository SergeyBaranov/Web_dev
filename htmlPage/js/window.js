function show () {
    let element_input = document.querySelector(".input_label_first");
    let data = element_input.value;

    console.dir(data);

    let element_window = document.querySelector (".modal_view");
    element_window.classList.remove("hidden");
}

function hide () {
    let element_window = document.querySelector (".modal_view");
    element_window.classList.add("hidden");
}