"use strict";
const container = document.querySelector('.container');
const main = document.querySelector('#main');
const menuBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('#navbar');
const playBtn = document.querySelector('#playBtn');
const videoTemplate = document.querySelector('#video-template');
const iframeVideo = document.querySelector('#iframe-video');
const whitePlayBg = document.querySelector('#white-play-bg');
const testing = document.querySelector('.vp-controls');
menuBtn.onclick = () => {
    let displayValue = getComputedStyle(navBar, undefined).getPropertyValue('display');
    displayValue == 'none' ?
        (navBar.style.display = 'flex',
            menuBtn.setAttribute('name', 'close')) :
        (navBar.style.display = 'none',
            menuBtn.setAttribute('name', 'menu'));
};
playBtn.onclick = () => {
    playBtn.classList.add('hidden');
    videoTemplate.classList.add('hidden');
    whitePlayBg.classList.add('hidden');
    /*Video needs to automatically play*/
};
