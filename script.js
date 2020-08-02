let count = 0

let counter = document.getElementById('counter')

document.getElementById('add-animation').addEventListener('click', event => {
    const class_list = counter.classList;
    const animation_class = 'animation-counter';

    count++;
    counter.innerText = count;

    class_list.remove(animation_class, class_list.contains(animation_class));

    setTimeout(() => {
        counter.classList.add(animation_class);
    }, 1);
});