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
const changeImage = document.querySelectorAll('.js-changeImage');
const changeVideo = document.querySelector('.js-changeVideo');
let firstPreviousImage, secondPreviousImage, thirdPreviousImage;
//Generate a random number based on the number of images in that div and returns a random element
let randomElement = (theDivLogos) => {
    let randomNumber = Math.floor(Math.random() * theDivLogos.length);
    return theDivLogos[randomNumber];
};
let changeSrc = () => {
    let changer = (directory, index) => {
        switch (directory.includes('images')) {
            case true:
                // @ts-ignore
                changeImage[index].setAttribute('src', directory);
                break;
            default:
                changeVideo.setAttribute('src', directory);
                break;
        }
    };
    switch (true) {
        case screen.width >= 1920:
            changer('./images/lady_beside_leaf-hd.avif', 0);
            changer('./images/eye_drawing-hd.avif', 1);
            changer('./images/holding_phone-hd.avif', 2);
            changer('./images/e-hd.avif', 3);
            changer('./images/life-hd.avif', 4);
            changer('./videos/preloaded_video_720p.mp4', undefined);
            break;
    }
};
changeSrc();
window.onresize = () => changeSrc();
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
