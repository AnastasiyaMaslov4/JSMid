const products_list = document.querySelector('.products_list');
const feedbacks_list = document.querySelector('.feedbacks_list');

function renderList() {
    products_list.innerHTML = '';

    for (const key of Object.keys(localStorage)) {
        let li = document.createElement('li');
        li.innerHTML = `<button value=${key} class='product_btn'>${key}</button>`;
        products_list.append(li);
    }

    const btns = document.querySelectorAll('.product_btn');

    for (const btn of btns) {
        btn.addEventListener('click', () => {
            renderFeedbacks(btn.value);
        })
    }
}

function renderFeedbacks(product) {
    feedbacks_list.innerHTML = '';
    let feedbacks = localStorage.getItem(product);
    if(!feedbacks.includes(',')) {
        let li = document.createElement('li');
        li.innerHTML = `${feedbacks} <button value="${feedbacks}" class='del_btn'>Удалить</button>`;
        feedbacks_list.append(li);

        const delete_button = document.querySelector('.del_btn');

        delete_button.addEventListener('click', () => {
            localStorage.removeItem(product);
            feedbacks_list.innerHTML = '';
            renderList();
        } )
    } else {
        let fb_arr = feedbacks.split(',');
        for (const fb of fb_arr) {
            let li = document.createElement('li');
            li.innerHTML = `${fb} <button value="${fb}" class='del_btn'>Удалить</button>`;
            feedbacks_list.append(li);
        }

        const delete_buttons = document.querySelectorAll('.del_btn');

        for (const del_btn of delete_buttons) {
            del_btn.addEventListener('click', () => {
                    let fbItem = del_btn.value;
                    fb_arr.splice(fb_arr.indexOf(fbItem), 1);
                    localStorage.setItem(product, fb_arr);
                    renderFeedbacks(product);
        });
        }
    }
}

renderList();
