"use strict";
const leftArrow = document.querySelector('.left__button');
const rightArrow = document.querySelector('.right__button');
const img1 = document.querySelector('.first__img__media');
const img2 = document.querySelector('.second__img__media');
const img3 = document.querySelector('.third__img__media');
const img4 = document.querySelector('.fourth__img__media');

leftArrow.addEventListener('click', () => {
    if (img1.classList.contains('active')) {
        img1.classList.remove('active');
        img4.classList.add('active');
    } else if (img2.classList.contains('active')) {
        img2.classList.remove('active');
        img1.classList.add('active');
    } else if (img3.classList.contains('active')) {
        img3.classList.remove('active');
        img2.classList.add('active');
    } else if (img4.classList.contains('active')) {
        img4.classList.remove('active');
        img3.classList.add('active');
    }
});

rightArrow.addEventListener('click', () => {
    if (img1.classList.contains('active')) {
        img1.classList.remove('active');
        img2.classList.add('active');
    } else if (img2.classList.contains('active')) {
        img2.classList.remove('active');
        img3.classList.add('active');
    } else if (img3.classList.contains('active')) {
        img3.classList.remove('active');
        img4.classList.add('active');
    } else if (img4.classList.contains('active')) {
        img4.classList.remove('active');
        img1.classList.add('active');
    }
});