let bar = document.getElementById('bar');
let close = document.getElementById('close');
let nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//  product details  //

var mainimg = document.getElementById("main_img");
var smallimg = document.getElementById("small-img");

smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src;
}
