const feedback_btn = document.querySelector('.feedback_btn');
let name_input = document.querySelector('#product_name');
let feedback_input = document.querySelector('#product_feedback');

feedback_btn.addEventListener('click', () => {
    if(!localStorage.getItem(name_input.value)) {
        localStorage.setItem(name_input.value, feedback_input.value);
    } else {
        let previous = localStorage.getItem(name_input.value);
        localStorage.setItem(name_input.value, previous+','+feedback_input.value);
    }
})