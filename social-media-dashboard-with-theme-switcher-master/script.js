let btn = document.querySelector('.fas, .fa-toggle-on');
// let btnOff = document.querySelector('.fa-toggle-off')
let body = document.querySelector('body');
let head = document.querySelector('header');
let title = document.querySelectorAll(".header-left, .middle-title");
let search = document.querySelector('input');
let followers = document.querySelectorAll('.container-top-thumb-follow');
let thumb = document.querySelectorAll('.container-top-thumb, .container-bottom-item');
let thumbBottom = document.querySelectorAll('.container-bottom-item');
let stats = document.querySelectorAll('.bottom-item-down')

btn.addEventListener('click', () => {
    body.classList.toggle('bodyColor');
    head.classList.toggle('headerColor');
    search.classList.toggle('inputColor')
    for (let i = 0; i < stats.length; i++) {
        stats[i].classList.toggle('followersColor');
    }
    for (let i = 0; i < title.length; i++) {
        title[i].classList.toggle('followersColor');
    }
    for (let i = 0; i < followers.length; i++) {
        followers[i].classList.toggle('followersColor');
    }
    for (let i = 0; i < thumb.length; i++) {
        thumb[i].classList.toggle('thumbColor');
    }
    for (let i = 0; i < thumbBottom.length; i++) {
        thumbBottom[i].classList.toggle('borderColor');
    }
})