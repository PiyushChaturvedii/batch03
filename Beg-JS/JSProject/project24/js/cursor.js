const cursor = document.querySelector('.cursor');


// add eventlistner for the mouse when moved

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style","top: " + (e.pageY-10)+"px; left: " + (e.pageX - 10)+"px;");
})

// eventlistner to expand div size when click happen

document.addEventListener('click', () => {
    cursor.classList.add('expand');
    setTimeout(() => {
        cursor.classList.remove('expand') ;
    }, 400);
})

