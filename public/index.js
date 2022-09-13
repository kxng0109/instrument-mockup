"use strict";
const container = document.querySelector('.container');
const main = document.querySelector('#main');
const menuBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('#navbar');
const playBtn = document.querySelector('#playBtn');
const videoTemplate = document.querySelector('#video-template');
const iframeVideo = document.querySelector('#iframe-video');
const whitePlayBg = document.querySelector('#white-play-bg');
const firstLogoDiv = document.querySelector('#first-logo');
const firstDivLogos = firstLogoDiv.querySelectorAll('.sixth--section--logos');
const secondLogoDiv = document.querySelector('#second-logo');
const secondDivLogos = secondLogoDiv.querySelectorAll('.sixth--section--logos');
const thirdLogoDiv = document.querySelector('#third-logo');
const thirdDivLogos = thirdLogoDiv.querySelectorAll('.sixth--section--logos');
let firstPreviousImage, secondPreviousImage, thirdPreviousImage;
//Generate a random number based on the number of images in that div and returns a random element
let randomElement = (theDivLogos) => {
    let randomNumber = Math.floor(Math.random() * theDivLogos.length);
    return theDivLogos[randomNumber];
};
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
const logoAnimation = (previousElement, currentElement, theLogoDiv) => {
    console.log(previousElement);
    switch (true) {
        case previousElement == undefined || previousElement == null:
            currentElement.classList.add('show');
            break;
        case currentElement == previousElement:
            break;
        default:
            currentElement.classList.add('show');
            previousElement.classList.remove('show');
            break;
    }
    switch (theLogoDiv) {
        case firstDivLogos:
            return firstPreviousImage = currentElement;
            break;
        case secondDivLogos:
            return secondPreviousImage = currentElement;
            break;
        case thirdDivLogos:
            return thirdPreviousImage = currentElement;
            break;
    }
};
setInterval(() => {
    logoAnimation(firstPreviousImage, randomElement(firstDivLogos), firstDivLogos);
}, 2000);
setInterval(() => {
    logoAnimation(secondPreviousImage, randomElement(secondDivLogos), secondDivLogos);
}, 2000);
setInterval(() => {
    logoAnimation(thirdPreviousImage, randomElement(thirdDivLogos), thirdDivLogos);
}, 2000);
